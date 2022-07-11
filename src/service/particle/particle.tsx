import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

const Particle = () => {
  const particlesInit = async (main: Engine) => {
    console.log(main);
    await loadFull(main);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      width="50%"
      options={{
        fpsLimit: 60,
        style: {
          width: '50%',
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
            distance: 120
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

export default Particle;