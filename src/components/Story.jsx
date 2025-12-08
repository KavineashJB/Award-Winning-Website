import { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import gsap from "gsap";

const Story = () => {
  const frameRef = useRef(null);

  const handleMouseLeave = () => {
    if (frameRef.current) {
      gsap.to(frameRef.current, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { top, left, height, width } =
      frameRef.current.getBoundingClientRect();

    const xPos = clientX - left;
    const yPos = clientY - top;

    const centerX = width / 2;
    const centerY = height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(frameRef.current, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 700,
      ease: "power1.inOut",
    });
  };
  return (
    <div id="story" className="min-h-dvh w-screen bg-[#010101] text-blue-50">
      <div className="flex flex-col size-full items-center py-10 pb-24">
        <p className="mb-5 font-general text-md uppercase md:text-base">
          the multiversal ip world
        </p>

        <div className="relative size-full isolate">
          <AnimatedTitle
            title={"the st<b>o</b>ry of <br /> a hidden real<b>m</b>"}
            containerClass={
              "pointer-event-none mix-blend-difference relative flex flex-col items-center justify-center"
            }
          />

          <div className="story-img-container absolute inset-0">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseEnter={handleMouseLeave}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  src="/img/entrance.webp"
                  alt="entrance"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* for the rounded corner */}
            <svg
              className="invisible absolute size-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="flt_tag"
                    operator="atop"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              Where realms converge, lies Zentry and the boundless pillar.
              Discover its secrets and shape your fate amidst infinite
              opportunities.
            </p>

            <Button
              id="realm-btn"
              title="discover prologue"
              containerClass="mt-5 bg-blue-75"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
