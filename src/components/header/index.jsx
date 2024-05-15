import Hero from "./hero";
import "./index.scss";
import Navbar from "./navbar";
const Header = () => {
    return (
        <header className="header">
            <Navbar />
            <Hero />
        </header>
    );
};

export default Header;
