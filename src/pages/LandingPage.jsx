import React from "react";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";


function LandingPage(){
    return(
        <>
            <NavBar/>
            <div className="hero h-175 w-full flex flex-col justify-center items-center gap-4 bg-linear-to-b from-amber-100 to-purple-100">
                
                <h1 className="text-4xl pb-5 font-bold bg-linear-to-r from-slate-900 to-slate-500
               bg-clip-text text-transparent">Where Ideas Become Clear, Not Noisy</h1>
                <h3 className="text-2xl">A distraction-free blogging platform for developers, thinkers, and creators who care about clarity over clicks.</h3>
                <p>Write, read, and explore deeply — without algorithms, ads, or artificial hype.</p>
                <div className="button-items w-150 flex justify-center gap-4">
                    <button className="border border-slate-400/30 w-34 py-2 bg-amber-100 rounded-3xl">Start Writing</button>
                    <button className="border border-slate-400/30 w-34 py-2 bg-amber-100 rounded-3xl">Explore Blogs</button>
                </div>
            </div>
            <Footer/>
        </>
    )
}


export default LandingPage;