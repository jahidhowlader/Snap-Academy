import { FiSearch } from "react-icons/fi";
import './AllUser.css'
import useAllUser from "../../../hooks/useAllUser";
import toast from "react-hot-toast";

const AllUser = () => {

    // GET TOKEN FROM LOCAL STORAGE
    const token = localStorage.getItem('access-token')

    const { allUser, refetch } = useAllUser()

    // HANDLER USER ROLE EDIT
    const handlerChangeRoleUser = (user) => {

        fetch(`https://snap-academy-server.vercel.app/allusers/admin/${user.email}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                authorization: token
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
        fetch(`https://snap-academy-server.vercel.app/allusers/admin/${user.email}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                authorization: token
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
            // TODO:
            // Delete User From Firebase
            // await deleteUserData(user)

            await fetch(`https://snap-academy-server.vercel.app/allUsers?email=${email}`, {
                method: "DELETE",
                headers: {
                    authorization: token
                }
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
        <section className="p-5 lg:p-0 overflow-auto">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
                <div className=" cursor-pointer">
                    <div className="relative inline">

                        {/* TODO: Search Implement */}
                        <input type="text" className="border py-1 pl-8 pr-5 rounded-md outline-primary-color w-[250px]" placeholder="Search User" />

                        <div className="h-full absolute left-0 top-1/2 -translate-y-1/2 text ">
                            <FiSearch className="my-auto h-full rounded-md rounded-l-none w-8 px-2" />
                        </div>
                    </div>
                </div>

                <div>
                    <h5 className="text-xl font-semibold">Total Users: <span className="text-primary-color text-">{allUser?.length}</span></h5>
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
                                Array.isArray(allUser) && allUser.map((user, idx) => <tr
                                    key={user._id}
                                >
                                    <td >{idx + 1}</td>
                                    <td className="w-1/3">{user?.email}</td>
                                    <td>{user?.name}</td>
                                    <td className="font-bold">{user?.role}</td>
                                    <td className="space-x-0  lg:space-x-0 xl:space-x-2">

                                        <button onClick={() => handlerChangeRoleUser(user)} className={`${user?.role === 'user' ? 'bg-gray' : 'bg-black'} px-2 text-white rounded xl:rounded-md text-sm`} disabled={user?.role === 'user' ? true : false}>User</button>

                                        <button onClick={() => handlerChangeRoleAdmin(user)} className={`${user?.role === 'admin' ? 'bg-gray' : 'bg-light-green'} px-2 text-white rounded xl:rounded-md text-sm`} disabled={user?.role === 'admin' ? true : false}>Admin</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handlerUserDelete(user?.email)} className="bg-error px-2 text-white rounded-md text-sm">Remove</button>
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