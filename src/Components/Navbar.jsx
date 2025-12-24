
function NavBar(){
    return (
        <div className="navbar w-full h-13 flex justify-between items-center border px-4">
            <div className="logo w-18 text-xs pl-2 sm:text-lg sm:w-24 ">Blog App</div>
            <div className="navbar-items w-60 lg:w-80">
                <ul className=" flex justify-around items-center text-xs lg:text-sm">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">Help</a></li>
                    <button className="post-btn bg-blue-300 flex items-center justify-center h-8 px-5 py-2 rounded-2xl text-center">Add Post</button>
                </ul>
            </div>
        </div>
    )
}


export default NavBar;