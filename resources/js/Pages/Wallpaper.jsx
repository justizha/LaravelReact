import Card from "@/Components/Card"
import Navbar from "@/Components/Navbar"

const Wallpaper = () => {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <h1 className="text-center lg:text-5xl text-3xl font-semibold dark:text-white mb-5 top-16 relative mt-10">All Wallpaper</h1>
      <div className="flex flex-wrap justify-center top-16 mt-4 relative mx-2 ">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Wallpaper
