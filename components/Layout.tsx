import { useState, useEffect, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import Sky from '../components/Sky';

type LayoutProps = { children: React.ReactNode };

const Layout = ({ children }: LayoutProps) => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      particles: {
        number: {
          value: 355,
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: ['#ffffff', '#fffbbf'],
        },
        shape: {
          type: 'image',
          options: {
            image: {
              src: 'https://2019naeun.s3.ap-northeast-2.amazonaws.com/assets/images/star.png',
              width: 100,
              height: 100,
            },
          },
        },
        opacity: {
          value: { min: 0.3, max: 1.0 },
          random: { enable: true },
          animation: {
            enable: true,
            speed: 0.2,
            minimumValue: 0.3,
            sync: false,
          },
        },
        size: {
          value: { min: 1.5, max: 3.5 },
          random: {
            enable: true,
          },
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 1,
            sync: false,
          },
        },
        rotate: {
          value: { min: 0, max: 360 },
          random: {
            enable: true,
          },
          animation: {
            enable: true,
            speed: { min: 1, max: 5 }, // 각 별마다 다른 회전 속도
            sync: false,
          },
        },
        links: {
          enable: false,
        },
        move: {
          enable: true,
          speed: 0.3,
          direction: MoveDirection.none,
          random: true,
          straight: false,
          outModes: {
            default: OutMode.out,
          },
          bounce: false,
          attract: {
            enable: false,
            rotate: {
              x: 600,
              y: 1200,
            },
          },
        },
      },
      interactivity: {
        detectsOn: 'canvas',
        events: {
          onHover: {
            enable: true,
            mode: 'bubble',
          },
          onClick: {
            enable: true,
            mode: 'push',
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          grab: {
            distance: 400,
            links: {
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
            quantity: 4,
          },
          remove: {
            quantity: 2,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div
      className="wrapper"
      style={{ position: 'relative', width: '100%', height: '100vh' }}
    >
      {init && (
        <>
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
          />
          <Sky />
        </>
      )}
      {children}
    </div>
  );
};

export default Layout;
