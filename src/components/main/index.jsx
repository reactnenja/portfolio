import About from "./about";
import Blog from "./blog";
import "./index.scss";
import Portfolio from "./portfolio";
import Skills from "./skills";
const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <Portfolio />
                <Blog />
                <Skills />
                <About />
            </div>
        </main>
    );
};

export default Main;
