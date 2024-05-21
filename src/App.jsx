import "./App.css";
import Hero from "./components/header/hero";
import Navbar from "./components/header/navbar";
import Main from "./components/main";
const App = () => {
    return (
        <div className="font-sora ">
            <Navbar />
            <Hero />
            <Main />
        </div>
    );
};

export default App;
