import About from "./about";
import "./index.scss";
import Portfolio from "./portfolio";
import Skills from "./skills";
const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <Portfolio />
                <Skills />
                <About />
            </div>
        </main>
    );
};

export default Main;
