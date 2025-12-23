
import NavBar from "../Components/Navbar";
import BlogCard from "../Components/BlogCard";
import Footer from "../Components/Footer";
import LandingPage from "./LandingPage";

function HomePage(){
    return(
        <div className="min-h-screen flex flex-col justify-start items-center ">
            <NavBar />
            <div className="container min-h-screen w-175 px-6 py-8 flex flex-col gap-2 items-center justify-start">
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
            </div>
            <Footer/>
        </div>
    )
}


export default HomePage;