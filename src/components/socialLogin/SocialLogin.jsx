import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from 'react-hot-toast';

const SocialLogin = () => {

    // IMPORT AUTHCONTEXT
    const { googleSignin, facebookSignin } = useContext(AuthContext)

    // handler Google signin
    const handlerGoogleSignin = async () => {

        try {
            await googleSignin()
        } catch (e) {
            console.log(e);
        }
    }

    // handler facebook signin
    const handlerFacebookSignin = async () => {

        try {

            await facebookSignin()

        } catch (e) {
            console.log(e);
            toast.error(e.code);
        }
    }

    return (
        <div className="pb-5 flex items-center gap-5">

            {/* Google */}
            <div>
                <img 
                src="/google.png" 
                alt="google" 
                className="w-6 h-6 cursor-pointer" 
                onClick={handlerGoogleSignin}
                />
            </div>

            {/* Facebook */}
            <div>
                <img
                    src="/facebook.png"
                    alt="Facebook"
                    className="w-6 h-6 cursor-pointer"
                    onClick={handlerFacebookSignin}
                />
            </div>

        </div>
    );
};

export default SocialLogin;