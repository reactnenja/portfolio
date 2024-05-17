import About from "./about";
import Contact from "./contact";
import Feadback from "./feadback";
import "./index.scss";
import Portfolio from "./portfolio";
import Skills from "./skills";
const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <Portfolio />
                <Skills />
                <Feadback />
                <About />
                <Contact />
            </div>
        </main>
    );
};

export default Main;
