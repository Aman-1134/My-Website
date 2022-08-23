import image from './aman-logo.png';

const Navbar = () => {
    return ( 
        <nav className="navigation-bar">
            <ul>
                <li id="logo"><img src={image} height={35} width={200} alt="logo-aman"/></li>
                <li id= "Active"><a href="/">Home</a></li>
                <li id= "Active"><a href="/About">About</a></li>
                <li id= "Active"><a href="/Services">Services</a></li>
                <li id= "Active"><a href="/Portfolio">Portfolio</a></li>
                <li id= "Active"><a href="/Contact">Contact</a></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;