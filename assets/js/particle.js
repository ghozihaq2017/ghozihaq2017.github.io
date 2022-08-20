/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS(
  'particles-js',

  {
    particles: {
      number: {
        value: 178,
        density: {
          enable: true,
          value_area: 3527.50653390415,
        },
      },
      color: {
        value: '#1b1818',
      },
      shape: {
        type: 'triangle',
        stroke: {
          width: 1,
          color: '#210f33',
        },
        polygon: {
          nb_sides: 4,
        },
        image: {
          src: 'img/github.svg',
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.09620472365193136,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 12.02559045649142,
        random: true,
        anim: {
          enable: true,
          speed: 56.03332764879281,
          size_min: 5.684540486109416,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 0,
        color: '#ffffff',
        opacity: 0.1843923869995351,
        width: 3.8481889460772543,
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'bottom',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 1603.4120608655228,
          rotateY: 2164.606282168456,
        },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
        onclick: {
          enable: false,
          mode: 'remove',
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
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
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
  }
);
