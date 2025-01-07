import { Fade } from "react-awesome-reveal";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Trending from "../components/Trending";
import Lotties from "../components/Lotties";




const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Fade
            
            >
          
                <Lotties></Lotties>
                <Slider></Slider>
                <Products></Products>
                <Categories></Categories>
                {/* <Review></Review> */}
                <Trending></Trending>
            </Fade>
        </div>
    );
};

export default Home;