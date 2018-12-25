<header id="masthead" className="site-header container" role="banner">
    <div className="site-branding  site-branding--image logo p-relative">
        <Link to={'/'}><img className="main-logo logo" alt="Home" src={Logo}/></Link>
    </div>
    <div className="main-menu p-relative">
        <ul id="menu__">
            <li className="item_menu__"><Link className="a-animation" to={'/'}>Home</Link>
            </li>

            <li className="item_menu__"><Link className="a-animation" to={'about'}>About</Link>
            </li>
            <li className="item_menu__"><Link className="a-animation"
                                              to={'products'}>Products</Link></li>
            <li className="item_menu__"><Link className="a-animation" to={'contact'}>Contact</Link>
            </li>
        </ul>
    </div>
</header>