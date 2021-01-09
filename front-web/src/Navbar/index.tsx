import'./styles.css';
import { ReactComponent as Logo } from './logo.svg';

function Navbar (){
    return (
        <nav className="main-navgbar">
            <Logo />
            <a href="home" className="logo-text">DS Delivery</a>
        </nav>
    );
}

export default Navbar;