import Categories from "../components/Categories";
import Products from "../components/Products";
import Review from "../components/Review";
import Slider from "../components/Slider";
import Trending from "../components/Trending";




const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
        
            <Slider></Slider>
            <Products></Products>
            <Categories></Categories>
            <Review></Review>
            <Trending></Trending>

         
        </div>
    );
};

export default Home;