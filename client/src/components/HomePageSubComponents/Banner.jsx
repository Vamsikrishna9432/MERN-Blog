import { Button } from "flowbite-react"
import { HiSearch } from "react-icons/hi"


const Banner = () => {
  return (
    <div className="mt-2 max-w-7xl rounded-lg mx-auto h-[400px] bg-hero-background bg-cover bg-no-repeat flex flex-col justify-end">
        <div className="m-8">
            <h1 className="text-white font-bold text-3xl md:text-5xl mb-4">The Future of Technology</h1>
            <p className="text-gray-400 mb-4">A deep dive into the latest advancements in AI, robotics, and more</p>
            <div className="max-w-lg p-2 flex border border-2 border-gray-300 items-center bg-white rounded-lg">
                <div className="flex w-full items-center">
                    <HiSearch className="w-6 h-6 text-black" />
                    <input type='text' className="cursor-pointer appearance-none border-none bg-transparent text-black placeholder-gray-400 focus:outline-none focus:ring-0 w-40 sm:52 md:w-80" placeholder="Search..."/>
                </div>
                <Button className="bg-blue-500 dark:bg-500 text-white font-bold mr-3" size="sm">Explore</Button>
            </div>
        </div>
  </div>
  )
}

export default Banner