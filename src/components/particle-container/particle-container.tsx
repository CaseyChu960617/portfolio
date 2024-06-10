import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import type { Container, Engine } from "tsparticles-engine";

interface IParticleContainerProps {
  className?: string;
}

const ParticleContainer: React.FC<IParticleContainerProps> = ({ className }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {}, []);

  return (
    <Particles
      className={className}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        name: "Star",
        particles: {
          number: {
            value: 30,
            density: {
              enable: false,
            },
          },
          color: {
            value: "#fff",
          },
          shape: {
            type: "circle",
            options: {
              star: {
                sides: 5,
              },
            },
          },
          opacity: {
            value: 0.8,
          },
          size: {
            value: 2,
          },
          rotate: {
            value: {
              min: 0,
              max: 360,
            },
            direction: "clockwise",
            animation: {
              enable: true,
              speed: 5,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 0.3,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            bubble: {
              distance: 400,
              size: 6,
              duration: 2,
              opacity: 8,
              color: "#fff",
            },
            repulse: {
              distance: 50,
            },
            push: {
              quantity: 4,
            },
            remove: {
              quantity: 2,
            },
          },
        },
        background: {
          color: "transparent",
        },
      }}
    />
  );
};

export default ParticleContainer;
