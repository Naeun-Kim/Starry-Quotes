import React from "react";
import Particles from "react-tsparticles";
import * as params from "../assets/particles";

const Layout: React.FC = ({ children }) => (
  <div className="wrapper">
    {/* <Particles options={params} /> */}
    <Particles
      options={{
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
              value_area: 789.1476416322727,
            },
          },
          color: {
            value: ["#ffffff", "#fffbbf"],
          },
          shape: {
            type: "image",
            stroke: {
              width: 0,
            },
            polygon: {
              nb_sides: 5,
            },
            image: [
              {
                src:
                  "https://2019naeun.s3.ap-northeast-2.amazonaws.com/assets/images/star.png",
                width: 100,
                height: 100,
              },
            ],
          },
          opacity: {
            value: 0.9,
            random: true,
            anim: {
              enable: true,
              speed: 0.2,
              opacity_min: 0,
              sync: false,
            },
          },
          size: {
            value: 4,
            random: true,
            anim: {
              enable: true,
              speed: 3,
              size_min: 0,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 0.2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "bubble",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 83.91608391608392,
              size: 1,
              duration: 3,
              opacity: 1,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
    {children}
  </div>
);

export default Layout;
