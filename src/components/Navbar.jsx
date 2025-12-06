import { navLinks } from '../constants/index'

const Navbar = () => {
    return (
        <header>
            <nav>
                {/* the main logo img */}
                <img src="/logo.svg" alt="apple logo" />

                {/* all the links  */}
                <ul>
                    {navLinks.map(link => (
                        <a key={link.label}>{link.label}</a>
                    ))}
                </ul>

                {/* div containing store and search button */}
                <div className='flex-center gap-3'>
                    <button>
                        <img src="/search.svg" alt="search" />
                    </button>
                    <button>
                        <img src="/cart.svg" alt="cart" />
                    </button>
                </div>

            </nav>
        </header>
    )
}

export default Navbar