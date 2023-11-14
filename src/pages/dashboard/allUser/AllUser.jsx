import { FiSearch } from "react-icons/fi";
import './AllUser.css'
import useAllUser from "../../../hooks/useAllUser";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const AllUser = () => {

    // IMPORT AUTHCONTEXT
    const { user, deleteUserData } = useAuth()

    const { allUser, refetch } = useAllUser()

    // HANDLER USER ROLE EDIT
    const handlerChangeRoleUser = (user) => {

        fetch(`http://localhost:3000/allusers/admin/${user.email}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ role: 'user' })
        })
            .then(res => res.json())
            .then(() => {

                refetch()
                toast.success(`${user.name} is a user now!`)
            })
    }

    const handlerChangeRoleAdmin = (user) => {
        fetch(`http://localhost:3000/allusers/admin/${user.email}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ role: 'admin' })
        })
            .then(res => res.json())
            .then(() => {

                refetch()
                toast.success(`${user.name} is an Admin now!`)
            })
    }

    // HANDLER DELETE USER
    const handlerUserDelete = async (email) => {

        try {
            // Delete User From Firebase
            // await deleteUserData(user)

            await fetch(`http://localhost:3000/allUsers?email=${email}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {

                    toast.success(data.message)
                    refetch()
                })

        } catch (e) {
            console.log(e);
            toast.error(e)
        }
    }

    return (
        <section className="">
            <div className="flex items-end justify-between">
                <div className="relative cursor-pointer">
                    {/* TODO: Search Implement */}
                    <input type="text" className="border py-1 px-5 rounded-md outline-primary-color w-[250px]" placeholder="Search User" />

                    <div className="h-full text-white absolute right-0 top-1/2 -translate-y-1/2 text pl-5">
                        <FiSearch className="my-auto bg-primary-color h-full rounded-md rounded-l-none w-8 px-2" />
                    </div>
                </div>

                <div>
                    <h5 className="text-xl font-semibold">Total Users: <span className="text-primary-color text-">215</span></h5>
                </div>
            </div>

            {/* Table for All USER */}
            <div className="w-full h-[calc(100vh-140px)] mt-6">
                <div className="overflow-x-auto h-full">
                    <table className="w-full" id="allUsers">
                        {/* head */}
                        <thead className="text-left bg-primary-color  text-white" id="allUserHead">
                            <tr className="">
                                <th className="rounded- pl-4 py-2">NO</th>
                                <th className="rounded- pl-4 py-2">USER EMAIL</th>
                                <th>USER NAME</th>
                                <th>ROLE</th>
                                <th>Action</th>
                                <th>REMOVE</th>
                            </tr>
                        </thead>
                        <tbody className="">

                            {/* row 1 */}
                            {
                                allUser.map((user, idx) => <tr
                                    key={user._id}
                                >
                                    <td >{idx + 1}</td>
                                    <td className="w-1/3">{user.email}</td>
                                    <td>{user.name}</td>
                                    <td className="font-bold">{user.role}</td>
                                    <td className="space-x-2">

                                        <button onClick={() => handlerChangeRoleUser(user)} className={`${user.role === 'user' ? 'bg-gray' : 'bg-black'} px-2 text-white rounded-md text-sm`} disabled={user.role === 'user' ? true : false}>User</button>

                                        <button onClick={() => handlerChangeRoleAdmin(user)} className={`${user.role === 'admin' ? 'bg-gray' : 'bg-light-green'} px-2 text-white rounded-md text-sm`} disabled={user.role === 'admin' ? true : false}>Admin</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handlerUserDelete(user.email)} className="bg-error px-2 text-white rounded-md text-sm">Remove</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>


            </div>
        </section>
    );
};

export default AllUser;