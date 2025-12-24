
import NavBar from "../Components/Navbar";
import BlogCard from "../Components/BlogCard";

function HomePage(){
    return(
        <div className="min-h-screen flex flex-col justify-start items-center ">
            <NavBar />
            <div className="container min-h-screen w-full max-w-7xl px-4 sm:px-6 py-8 flex flex-col gap-2 items-center justify-start">
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
            </div>
        </div>
    )
}


export default HomePage;