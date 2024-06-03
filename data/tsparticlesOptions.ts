
export const particlesOptions = {
  fullScreen: {
    enable: true,
    zIndex: 1,
  },
  background: {
    color: {
      value: "transparent",
    },
  },
  // fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#000000",
    },
    links: {
      color: "#2B3AE3",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 0.5,
    },
    move: {
      enable: true,
      direction: "none",
      outModes: "bounce",
      random: 1,
      speed: 10,
      straight: true,
    },
    number: {
      density: {
        enable: true,
      },
      value: 200,
    },
    opacity: {
      value: 1,
    },
    shape: {
      options: {
        circle: [
          {
            fill: false,
          },
          {
            fill: false,
            particles: {
              stroke: {
                color: {
                  value: ["#fff", "#f00", "#0f0", "#00f"],
                },
                width: 2,
              },
            },
          },
        ],
        square: [
          {
            fill: false,
          },
          {
            fill: false,
            particles: {
              stroke: {
                color: {
                  value: ["#fff", "#f00", "#0f0", "#00f"],
                },
                width: 1,
              },
            },
          },
        ],
      },
      type: ["circle", "square"],
    },
    stroke: { color: "#fff", width: 0, opacity: 1 },
    size: {
      anim: { enable: true, size_min: 0.1, speed: 40, sync: false },
      random: { enable: true, minimumValue: 15 },
      value: 20,
    },
    // size: {
    //   value: { min: 1, max: 5 }
    // }
  },
  detectRetina: false,
};