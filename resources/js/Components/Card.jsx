
const Card = () => {
    return (

        <div className="flex flex-col w-[400px] mx-auto">
            <div className="relative flex-shrink-0 mb-5 h-[250px]">
                <img
                    src="img/test.jpg"
                    alt=""
                    className="object-cover w-full h-full rounded-lg"
                />
            </div>
            <div className="flex flex-col flex-1">
                <h3 className="mb-3 text-lg font-bold dark:text-gray-100">
                    Welcome to the best place to travel on the world
                </h3>
                <div className="dark:text-gray-400 text-gray-800">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
            </div>
        </div>

    )
}

export default Card