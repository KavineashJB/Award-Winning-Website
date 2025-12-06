import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });
  return (
    <section
      id="about"
      className=" min-h-screen w-screen flex flex-col items-center"
    >
      <div className="relative">
        <h2 className="uppercase font-general mt-36 mb-10 text-xl">
          welcome to zentry
        </h2>

        <div className="special-font text-5xl uppercase text-center leading-[0.8] mb-8">
          disc <b>o</b> ver the world's <br /> largest shared <b>a</b>dventure,
        </div>

        <AnimatedTitle
          Title={
            "disc <b>o</b> ver the world's <br /> largest shared <b>a</b>dventure,"
          }
          ContainerClass={
            "special-font text-5xl uppercase text-center leading-[0.8] mb-8"
          }
        />

        <footer className="about-subtext">
          <h2 className="font-semibold">
            The Game of Games begins-your life, now an epic MMOPPG
          </h2>
          <p className="text-gray-500">
            Zentry unites every player from countless games and platforms,{" "}
            <br />
            both digital and physical, into a unified Play Economy
          </p>
        </footer>
      </div>

      <div id="clip" className="h-dvh w-screen ">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
