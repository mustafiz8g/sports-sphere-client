

import { useLottie, useLottieInteractivity } from "lottie-react";
import loti1 from '../assets/football.json'
const style = {
  height: 100,
 
}
const options = {
  animationData : loti1,
  autoplay: true,
}

const Lottie1 = () => {
    const lottieObj = useLottie(options, style);
  const Animation = useLottieInteractivity({
    lottieObj ,
    mode:"scroll",
    actions : [
      {
        visibility: [0.4, 0.9],
        type: "seek",
        frames:[0, 53],
      },
      
    ],
  });
    return (
        <div>
            {Animation}
        </div>
    );
};

export default Lottie1;