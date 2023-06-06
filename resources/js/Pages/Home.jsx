import Card from "@/Components/Card"
import Navbar from "@/Components/Navbar"

const Home = () => {
    return (
        <div className="bg-LightPrimary dark:bg-primary">
            <div className="relative">
                <Navbar />
            </div>
            <div className="relative top-16 mt-8 ">
                <div className="flex flex-wrap justify-center container mx-auto">
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Home