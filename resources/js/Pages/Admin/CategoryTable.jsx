import NavAdminDashboard from '@/Components/NavAdminDashboard';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { router, usePage } from '@inertiajs/react';

const Category = () => {
    const { categories } = usePage().props;
    const handleDelete = (categoryId) => {
        if (confirm('Are you sure want to delete this record?')) {
            router.delete(route('deleteCategory', categoryId))
        }
    }
    return (
        <AuthenticatedLayout>
            <NavAdminDashboard />
            <div className="py-12">
                <h1 className='text-center font-bold text-3xl dark:text-white mb-5'>Manage Categories</h1>
                <div className='flex justify-end mr-10'>
                    <button className="items-center flex px-4 py-4 font-sans font-semibold  text-white bg-blue-600 mb-3 rounded-lg h-[30px] hover:scale-110 hover:bg-blue-400 hover:text-slate-100">
                        <a href={route('CategoryForm')}>Add New Categories</a>
                    </button>
                </div>

                <div className="flex justify-center mx-auto sm:px-6 lg:px-8">
                    <div className='overflow-x-auto'>
                        <table className="w-[650px] table-auto  bg-gray-200  rounded-md dark:bg-gray-700 overflow-x-auto">
                            <thead >
                                <tr className=''>
                                    <th className="text-center px-6 py-3 bg-gray-200 dark:bg-gray-600 dark:text-white  text-gray-700 font-semibold ">ID</th>
                                    <th className="text-center px-6 py-3 bg-gray-200 dark:bg-gray-600 dark:text-white  text-gray-700 font-semibold ">Name</th>
                                    <th className="text-center px-6 py-3 bg-gray-200 dark:bg-gray-600 dark:text-white  text-gray-700 font-semibold ">Slug</th>
                                    <th className="text-center px-6 py-3 bg-gray-200 dark:bg-gray-600 dark:text-white  text-gray-700 font-semibold ">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {categories && categories.length > 0 ? (
                                    categories.map((item, index) => (
                                        <tr key={item.id} >

                                            <td className="px-6 py-4 dark:text-white">{index + 1}</td>
                                            <td className="px-6 py-4 dark:text-white">{item.name}</td>
                                            <td className="px-6 py-4 dark:text-white">{item.slug}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex gap-3">
                                                    <button className="bg-red-500 text-center rounded-md w-full h-8 text-white hover:scale-110 focus:bg-red-400"
                                                        onClick={() => handleDelete(item.id)}>
                                                        <p>Delete</p>
                                                    </button>
                                                    <button className="bg-yellow-500 rounded-md w-full h-8 text-white hover:scale-110 focus:bg-yellow-400">
                                                        <p>Update</p>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="px-6 py-4 dark:text-white text-center text-[25px]">
                                            No data have been inserted yet.
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

export default Category