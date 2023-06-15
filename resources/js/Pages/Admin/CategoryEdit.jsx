import NavAdminDashboard from '@/Components/NavAdminDashboard';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { router } from '@inertiajs/react';
import { useState } from 'react';

const CategoryEdit = ({ category }) => {
    // const { categories } = usePage().props;
    const [formData, setFormData] = useState({
        name: category.name,
        slug: category.slug,
    })
    const handleInputChange = (e) => {
        // e.preventDefault();
        // put(route('UpdateCategory', { categories: categories.id }))
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        router.put(route('UpdateCategory', { category: category.id }), formData)
    }
    return (
        <AuthenticatedLayout>
            <NavAdminDashboard />
            <div className="mt-10 grid place-items-center" >

                <form
                    onSubmit={handleSubmit}
                    autoComplete="off"
                    className="w-full max-w-[850px] p-10  rounded-lg shadow"
                    aria-label="signup-form"
                    method='POST'
                >
                    <h2 className="mb-10 text-3xl font-bold text-center dark:text-white">Add New Category</h2>
                    <div className="flex flex-col items-start mb-5 gap-y-3">
                        <label htmlFor="name" className="text-sm font-medium cursor-pointer dark:text-white">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            name='name'
                            value={formData.name}
                            className="w-full p-2 bg-transparent border border-gray-200 rounded-lg dark:text-white outline-none"
                            placeholder="Category Name"
                            onChange={handleInputChange}

                        />
                    </div>
                    <div className="flex flex-col items-start mb-5 gap-y-3">
                        <label
                            htmlFor="slug"
                            className="text-sm font-medium cursor-pointer dark:text-white"
                        >
                            Slug
                        </label>
                        <input
                            id="slug"
                            type="text"
                            name='slug'
                            value={formData.slug}
                            className="w-full p-2 bg-transparent border border-gray-200 rounded-lg outline-none dark:text-white"
                            placeholder="Slug Name"
                            onChange={handleInputChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
                    >
                        Edit
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    )
}

export default CategoryEdit