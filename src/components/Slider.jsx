
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import p1 from '../../src/assets/p1.png'
import p2 from '../../src/assets/p2.png'
import p3 from '../../src/assets/p3.png'

const Slider = () => {
    return (
        <div>
            <Carousel>
                <div >
                    <img className="rounded-lg" src={p1} />
                </div>
                <div >
                    <img className="rounded-lg" src={p2} />
                </div>
                <div className="max-h-[600px]"  >
                    <img className="rounded-lg" src={p3} />

                </div>

            </Carousel>
        </div>
    );
};

export default Slider;