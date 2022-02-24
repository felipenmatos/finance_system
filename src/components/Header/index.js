import './style.css';
import logo from '../../assets/logo/Logo.svg';

function Header(){
    return (
        <header>
            <img src={logo} alt="logo"/> 
        </header>
    )
};

export default Header;