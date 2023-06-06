import { Link } from "@inertiajs/react"
import { useState } from "react"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    const handleLogout = (event) => {
        event.preventDefault();
        Inertia.post(route("logout"));
    };
    return (
        <nav className="bg-gray-200 dark:bg-secondary top-0 fixed w-full z-20">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto lg:p-2 p-3">
                <Link
                    href={route('/')}
                >
                    <h1 className="font-bold dark:text-white text-black text-2xl">WALLS</h1>
                </Link>
                <div className="flex md:hidden">
                    <button
                        type="button"
                        className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                        aria-label="Toggle menu"
                        onClick={toggleMenu}
                    >
                        <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current bg-slate-400 rounded">
                            {isOpen ? (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4.293 7.293A1 1 0 015.707 5.88l14 14a1 1 0 01-1.414 1.414l-14-14a1 1 0 01-.293-.707z"
                                />
                            ) : (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4 6a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm16 5a1 1 0 11-2 0 1 1 0 012 0zm-4 6a1 1 0 11-2 0 1 1 0 012 0zM5 16a1 1 0 100 2h14a1 1 0 100-2H5z"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                <div
                    className={`${isOpen ? "flex" : "hidden"
                        } w-full md:flex md:items-center md:w-auto`}
                >
                    <div className="flex flex-col p-5 md:p-0 mt-4 border w-full border-gray-100 rounded-lg gap-5 items-center bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-800">
                        <Link
                            href={route("wallpaper")}
                            className="dark:text-slate-200  dark:hover:text-white font-medium text-md  p-3 pl-4 pr-3 rounded hover:bg-slate-400 lg:hover:bg-transparent md:border-0 w-full text-center"
                        >
                            Wallpaper
                        </Link>
                        <Link
                            href="#"
                            className="dark:text-slate-200  dark:hover:text-white font-medium text-md  p-3 pl-4 pr-3 rounded hover:bg-slate-400 lg:hover:bg-transparent md:border-0 w-full text-center"
                        >
                            Category
                        </Link>
                        <Link
                            href="#"
                            className="dark:text-slate-200  dark:hover:text-white font-medium text-lg  p-3 pl-4 pr-3 rounded w-full text-center hover:bg-slate-400 lg:hover:bg-transparent md:border-0 "
                        >
                            About
                        </Link>
                        <Link
                            href={route('login')}
                            className="dark:text-slate-200 ho hover:text-white font-bold text=lg  p-4 bg-blue-600 w-full text-center rounded hover:scale-110 text-lg lg:hover:bg-tran md:border-0 "
                        >
                            Dashboard
                        </Link>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar