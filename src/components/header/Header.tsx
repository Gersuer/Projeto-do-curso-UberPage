import logo from '../../assets/uberlogo.png'
const Header = () => {
    return (
        <header className="w-full h-20 flex justify-center items-center bg-black px-2">
            <div className='w-full flex items-center justify-between max-w-7xl'>
                <div className='h-full flex items-center gap-4'>
                    <img
                        src={logo}
                        alt="logo Uber"
                        className='w-20 m-7'
                    />
                    <nav className='hidden text-white h-full md:flex items-center gap-4'>
                        <a className='font-medium hover:bg-zinc-800 rounded-xl duration-300 px-3 py-1' href="#">Company</a>
                        <a className='font-medium hover:bg-zinc-800 rounded-xl duration-300 px-3 py-1' href="#">Safety</a>
                        <a className='font-medium hover:bg-zinc-800 rounded-xl duration-300 px-3 py-1' href="#">Help</a>
                    </nav>
                </div>
                <div className='flex items-center gap-2'>
                    <a className='font-medium text-white px-3' href="#">Login</a>
                    <a
                        className='font-medium text-black bg-slate-50 px-3 py-1 rounded-full '
                        href="#"
                    >
                        Sign Up
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header