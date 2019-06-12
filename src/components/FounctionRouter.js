const About = 'THIS IS ABOUT !';
const Home = 'THIS IS HOME !';
const NotFound = 'Not Fount !';

const routes = {
  "/": Home,
  "/about": About
};

export default {
  name: "RouterComponent",
  functional: true,
  render: (h) => {
    return h('p', routes[window.location.pathname] || NotFound);
  }
};

