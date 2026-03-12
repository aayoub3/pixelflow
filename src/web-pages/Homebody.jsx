import { useState, useEffect } from "react";
import homeph1 from "../assets/home-ph1.jpg";
import homeph2 from "../assets/home-ph2.jpg";
import homeph3 from "../assets/home-ph3.jpg";
import homeph4 from "../assets/home-ph4.jpg";
import homeph5 from "../assets/home-ph5.jpg";

function Hometext() {
    const images = [homeph1, homeph2, homeph3, homeph4, homeph5];

    const [backgroundImage, setBackgroundImage] = useState(images[0]);

    useEffect(() => {
        let currentIndex = 0;

        const changeBackgroundImg = () => {
            currentIndex = (currentIndex + 1) % images.length;
            setBackgroundImage(images[currentIndex]);
        }

        const interval = setInterval(changeBackgroundImg, 3000);

        return () => clearInterval(interval);
    }, []);


    return(
        <div className="overflow-hidden">
            <div 
                className="bg-fixed bg-cover bg-center"
                style={{backgroundImage: `url(${backgroundImage})`, transition: "4s"}}
            >
                <div className="h-[600px] flex flex-col items-center justify-end pb-16">

                    {/* Name - PIXEL FLOW CREATION*/}
                    <h1 className="text-white font-semibold 
                        [-webkit-text-stroke:1px_#fff] [text-stroke:1px_#fff]
                        text-4xl tracking-tight px-4 py-2
                        xs:text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl
                        leading-tight
                        text-center
                        drop-shadow-xl"
                    >

                        PIXEL FLOW CREATION
                    </h1>

                    {/* COMMING SOON & STAY TUNED */}
<div className="mt-4 text-center flex flex-col space-y-2">
    <span 
        className="text-black text-5xl font-semibold tracking-widest drop-shadow-xl"
        style={{
            WebkitTextStroke: "0.3px white"
        }}
    >
        COMMING SOON
    </span>
    <span 
        className="text-black text-3xl font-bold tracking-widest"
        style={{
            WebkitTextStroke: "0.3px white"
        }}
    >
        Stay Tuned
    </span>
</div>

                </div>
            </div>
        </div>
    );
}

export default Hometext;