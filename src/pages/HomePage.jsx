
import NavBar from "../Components/Navbar";
import BlogCard from "../Components/BlogCard";


function HomePage(){
    return(
        <div className="min-h-screen bg-white-50 flex flex-col gap-10">
            <NavBar />
                <div className="flex flex-col gap-6 items-center">
                    <BlogCard title="Sample Blog 1" description="This is a sample blog post about interesting topics." />
                    <BlogCard title="Sample Blog 2" description="Another sample blog post with engaging content." />
                    <BlogCard title="Sample Blog 3" description="More sample content to showcase our blog." />
                </div>
        </div>
    )
}


export default HomePage;