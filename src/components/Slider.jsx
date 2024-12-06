
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import p1 from '../../src/assets/p1.png'
import p2 from '../../src/assets/p2.png'
import p3 from '../../src/assets/p3.png'
import p4 from '../../src/assets/p4.png'
import p6 from '../../src/assets/p6.png'
const Slider = () => {
    return (
        <div>
               <Carousel>
                <div >
                    <img src={p1} />
                </div>
                <div >
                    <img src={p2} />
                </div>
                <div className="max-h-[600px]"  >
                    <img className="" src={p3} />
                    
                </div>
              
            </Carousel>
        </div>
    );
};

export default Slider;