import About from "../About/About";
import Banner from "../Banner/Banner";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <div className="bg-black p-10">
            <Banner/>
            <About/>
            <Skills/>
        </div>
    );
};

export default Home;