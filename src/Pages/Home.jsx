import Products from "../components/Products";
import Slider from "../components/Slider";




const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
        
            <Slider></Slider>
            <Products></Products>
         <br />
        </div>
    );
};

export default Home;