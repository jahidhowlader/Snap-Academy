import toast from 'react-hot-toast';
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {

    // IMPORT AUTHCONTEXT
    // const { googleSignin, facebookSignin } = useContext(AuthContext)

    // useNAVIGATE USE FOR REDIRECT USER AFTER LOGIN AND useLOCATION USE FOR TRACK URL PATH
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname === '/dashboard/profile' ? '/dashboard/profile' : '/';

    // IMPORT AUTHCONTEXT
    const { googleSignin, facebookSignin } = useAuth()

    // handler Google signin
    const handlerGoogleSignin = async () => {

        try {
            // SIGNUP OR SIGNIN WITH GOOGLE
            await googleSignin()
                .then(async (result) => {

                    const loggedInUser = result.user;

                    // STORE USER DATA ON MongoDB
                    await fetch('http://localhost:3000/allUsers', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({ name: loggedInUser.displayName, email: loggedInUser.email, role: 'user' })
                    })
                        .then(res => res.json())
                        .then(() => {

                            toast.success('Successfully Signin.');
                            navigate(from, { replace: true });
                        })
                        .catch(e => {
                            toast.error(e);
                            console.log(e);
                        })
                })
                .catch(e => {
                    toast.error(e);
                    console.log(e);
                })



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