import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

export const Particle50 = () => {
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 60,
        background: {
          color: '#14274E',
        },
        style: {
          width: '100%'
        },
        "particles": {
          "number": {
            "value": 22,
            "density": {
              "enable": true,
              "value_area": 200
            }
          },
          "shape": {
            "type": "edge",
            "stroke": {
              "width": 1,
              "color": "#fff"
            },
            "polygon": {
              "nb_sides": 10
            },
          },
          "color": {
            "value": "random"
          },
          "opacity": {
            "value": 1,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 2,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 2000,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 200,
            "color": "random",
            "opacity": 0.6,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": true,
            "out_mode": "out",
            "bounce": true,
          }
        },
        "retina_detect": true
      }}
    />
  );
};

export const Particle100 = () => {
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      width="100%"
      options={{
        fpsLimit: 60,
        style: {
          width: '100%',
        },
        background: {
          color: {
            value: "#14274E",
          },
        },
        shape: {
          type: "circle",
          stroke: {
            width: 10,
            color: "#6A2C70"
          },
          // polygon: {
          //   "nb_sides": 15
          // }
        },
        particles: {
          links: {
            enable: true,
            distance: 180
          },
          move: {
            enable: true,
            speed: 2.2,
            outModes: {
              default: "out"
            }
          },
          size: {
            value: 2
          }
        },
        collisions: {
          enable: true,
        },
        responsive: [
          {
            maxWidth: 800,
            options: {
              maxParticles: 100,
              particles: {
                links: {
                  enable: true,
                  distance: 130
                },
                move: {
                  enable: true,
                  speed: 2.2,
                  outModes: {
                    default: "out"
                  }
                },
                size: {
                  value: 2
                }
              },
            }
          }, {
            maxWidth: 600,
            options: {
              maxParticles: 50,
              particles: {
                links: {
                  enable: true,
                  distance: 64
                },
                move: {
                  enable: true,
                  speed: 1.7,
                  outModes: {
                    default: "out"
                  }
                },
                size: {
                  value: 1.6
                }
              },
            }
          }, {
            maxWidth: 400,
            options: {
              maxParticles: 10,
              particles: {
                links: {
                  enable: true,
                  distance: 54
                },
                move: {
                  enable: true,
                  speed: 1.6,
                  outModes: {
                    default: "out"
                  }
                },
                size: {
                  value: 1.2  
                }
              },
            }
          }, {
            maxWidth: 300,
            options: {
              maxParticles: 0,
              particles: {
                links: {
                  enable: true,
                  distance: 36
                },
                move: {
                  enable: true,
                  speed: 1.2,
                  outModes: {
                    default: "out"
                  }
                },
                size: {
                  value: 1
                }
              },
            }
          }, {
            maxWidth: 200,
            options: {
              maxParticles: 0,
              particles: {
                links: {
                  enable: true,
                  distance: 24
                },
                move: {
                  enable: true,
                  speed: 1,
                  outModes: {
                    default: "out"
                  }
                },
                size: {
                  value: .6
                }
              },
            }
          }
        ]
      }}
    />
  );
};