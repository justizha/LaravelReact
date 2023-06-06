import NavAdminDashboard from '@/Components/NavAdminDashboard';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
const UserTable = (auth) => {
    const { users } = usePage().props;
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <NavAdminDashboard />
            <Head title="Dashboard" />

            <h1 className='text-center mt-10 font-bold text-3xl dark:text-white mb-5'>Manage Users</h1>
            <div className="py-10">
                <div className="flex justify-center">
                    <div className='overflow-x-auto'>
                        <table className="lg:w-[650px] table-auto bg-gray-200  rounded-md dark:bg-gray-700 overflow-x-auto">
                            <thead >
                                <tr className=''>
                                    <th className="text-center px-6 py-3 bg-gray-200 dark:bg-gray-600 dark:text-white  text-gray-700 font-semibold ">ID</th>
                                    <th className="text-center px-6 py-3 bg-gray-200 dark:bg-gray-600 dark:text-white  text-gray-700 font-semibold ">Name</th>
                                    <th className="text-center px-6 py-3 bg-gray-200 dark:bg-gray-600 dark:text-white  text-gray-700 font-semibold ">Email</th>
                                    <th className="text-center px-6 py-3 bg-gray-200 dark:bg-gray-600 dark:text-white  text-gray-700 font-semibold ">Role</th>
                                    <th className="text-center px-6 py-3 bg-gray-200 dark:bg-gray-600 dark:text-white  text-gray-700 font-semibold ">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {users && users.length > 0 ? (
                                    users.map((item) => (
                                        <tr key={item.id}>
                                            <td className="px-6 py-4 dark:text-white">{item.id}</td>
                                            <td className="px-6 py-4 dark:text-white">{item.name}</td>
                                            <td className="px-6 py-4 dark:text-white">{item.email}</td>
                                            <td className="px-6 py-4 dark:text-white">{item.role}</td>
                                            <td className='px-6 py-4'>
                                                <div className='flex gap-3'>
                                                    <button className='bg-red-500 text-center rounded-md w-full h-8 text-white hover:scale-110 focus:bg-red-400'>
                                                        <a href='#'>Delete</a>
                                                    </button>
                                                    <button className='bg-yellow-500 rounded-md w-full h-8 text-white hover:scale-110 focus:bg-yellow-400'>
                                                        <a href="#">Update</a>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))) : (
                                    <tr>
                                        <td colSpan="4"
                                            className='px-6 py-4 dark:text-white text-center text-[25px]'>
                                            No data have been inserted yet
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default UserTable