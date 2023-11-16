import ReactPlayer from "react-player";
import { HiPlay } from "react-icons/hi2";

const xs = window.innerWidth < 640
const sm = window.innerWidth < 768
const md = window.innerWidth < 1024
const lg = window.innerWidth < 1280
const xl = window.innerWidth < 1520

const VideoInformation = () => {
    return (
        <section className="flex flex-col lg:flex-row lg:items-center gap-10 justify-center my-container my-16 xl:my-24 2xl:my-32">

            {/* Video Player */}
            <div className="flex-1 rounded-xl w-[300px] order-2 lg:order-1 lg:flex justify-center">
                <ReactPlayer

                    url='https://youtu.be/hVuTuib65WM?si=mpaydU3_w7zjwJxi'
                    config={{
                        youtube: {
                            playerVars: { showinfo: 1 }
                        }
                    }}
                    width={xs ? 280 : sm ? 600 : md ? 700 : lg ? 480 : xl ? 600 : 690}
                    height={xs ? 150 : sm ? 335 : md ? 390 : lg ? 260 : xl ? 330 : 385}
                    light={true}
                    controls={true}
                    muted={true}
                    className="rounded-xl"
                />
            </div>

            <div className="flex-1 order-1 lg:order-2">
                <h3 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-primary-color  lg:pb-8">See Video For <br /> more information</h3>

                <p className="2xl:text-lg pb-7 pt-4">Dive into the world of photography fundamentals in our latest video. Uncover the magic of visual storytelling, master composition, and harness the power of light. 📷✨ For a deeper exploration, visit snapacademy.com. Let's embark on a creative journey together</p>
                {/* TODO: */}
                <div className="2xl:text-[30px]">
                    <button className="border-2 border-primary-color text-primary-color font-semibold  2xl:text-2xl px-4 2xl:px-6 py-1 2xl:py-2 rounded xl:rounded-md  flex items-center gap-2">
                        <HiPlay />
                        Watch Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default VideoInformation;