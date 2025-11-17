function NavBar() {




  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50  ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center gap-8">

        <a href="#design" className=" text-blue-600 hover:text-gray-300">Design</a>
        <a href="#performance" className="hover:text-gray-300">Performance</a>
        <a href="#cameras" className="hover:text-gray-300">Cameras</a>
        <a href="#cores" className="hover:text-gray-300">Cores</a>


        < button  className="bg-blue-600 hover:bg-blue-700 px-6 py-2 cursor-pointer rounded-full hover:text-gray-300 transition-all duration-300 hover:scale-105 drop-shadow-lg drop-shadow-indigo-500/50"><a href="https://www.apple.com/br/" target="_blank"
rel="noopener noreferrer"
>Comprar</a></button>

      </div>
    </nav>

  )
}

export default NavBar;
