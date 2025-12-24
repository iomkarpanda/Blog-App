import NavBar from "../Components/Navbar";
import { useEffect } from "react";

function LandingPage(){
    useEffect(() => {
    document.title = "Welcome";
  }, []);
  
    return(
        <>
            <NavBar/>
            <div className="hero min-h-screen w-full flex flex-col relative justify-center items-center gap-4 bg-linear-to-b from-amber-100 to-purple-100">

                <div className="pattern absolute inset-0 z-0
                                bg-[linear-gradient(to_right,rgba(71,85,105,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(71,85,105,0.1)_1px,transparent_1px)]
                                bg-size-[32px_32px]"></div>

                <h1 className="text-3xl w-96 sm:text-4xl sm:w-43.75 lg:w-3xl pb-5 font-bold bg-linear-to-r from-slate-900 to-slate-500 text-center
               bg-clip-text text-transparent z-10">Where Ideas Become Clear, Not Noisy</h1>

                <h3 className="text-lg w-96 sm:text-xl sm:w-150 text-center z-10">A distraction-free blogging platform for developers, thinkers, and creators who care about clarity over clicks.</h3>

                <p className="w-64 text-sm sm:w-175 text-center z-10">Write, read, and explore deeply.</p>

                <div className="button-items w-150 flex justify-center gap-4 z-10">
                    <button className="border border-slate-400/30 w-34 py-2 bg-amber-100 rounded-3xl ">Start Writing</button>
                    <button className="border border-slate-400/30 w-34 py-2 bg-amber-100 rounded-3xl ">Explore Blogs</button>
                </div>
            </div>
        </>
    )
}


export default LandingPage;