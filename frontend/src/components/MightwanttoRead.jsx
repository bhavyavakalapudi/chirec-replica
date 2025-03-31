export const MightwanttoRead = () => {
    return <div className="bg-gray-50">
        <h1 className="text-center text-4xl font-bold p-10 mt-10">You might want to read</h1>
        <div className="grid grid-cols-4 m-10 gap-4">
            <div className="relative group w-70 h-68 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: "url('https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/Untitled-design-4.png')" }}>
                <div className="m-10">
                    <hr className="w-10 h-1 my-4 bg-white border-0 rounded-sm md:my-5 dark:bg-white" />
                    <p className="text-white font-bold">Your child's journey</p>
                    <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-40 transition-opacity"></div>
                    <button className="absolute rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-blue-500 border-blue-500 border-2 hover:bg-blue-500 hover:text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn More
                    </button>
                </div>
            </div>
            <div className="w-70 h-68 bg-cover bg-center rounded-lg relative group"
                style={{ backgroundImage: "url('https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/04/our-character-compass_card-1.png')" }}>
                <div className="m-10">
                    <hr className="w-10 h-1 my-4 bg-white border-0 rounded-sm md:my-5 dark:bg-white" />
                    <p className="text-white font-bold">Our Character Compass</p>
                    <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-40 transition-opacity"></div>
                    <button className="absolute rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-blue-500 border-blue-500 border-2 hover:bg-blue-500 hover:text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn More
                    </button>
                </div>
            </div>
            <div className="relative group w-70 h-68 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: "url('https://www.chirec.ac.in/wp-content/uploads/sites/15/2024/04/Student-achievements_card.png')" }}>
                <div className="m-10">
                    <hr className="w-10 h-1 my-4 bg-white border-0 rounded-sm md:my-5 dark:bg-white" />
                    <p className="text-white font-bold">Student Achievements</p>
                    <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-40 transition-opacity"></div>
                    <button className="absolute rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-blue-500 border-blue-500 border-2 hover:bg-blue-500 hover:text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn More
                    </button>
                </div>
            </div>
            <div className="relative group w-70 h-68 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: "url('https://www.chirec.ac.in/wp-content/uploads/sites/15/2023/12/Untitled-design-3.png')" }}>
                <div className="m-10">
                    <hr className="w-10 h-1 my-4 bg-white border-0 rounded-sm md:my-5 dark:bg-white" />
                    <p className="text-white font-bold">Apply Now</p>
                    <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-40 transition-opacity"></div>
                    <button className="absolute rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-blue-500 border-blue-500 border-2 hover:bg-blue-500 hover:text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    </div>
}