<script>
import About from "./About";
import Home from "./Home";
import NotFound from "./NotFount";

const routes = {
  "/": Home,
  "/about": About
};

export default {
  name: "RouterComponent",
  components: {
      About,
      Home,
      NotFound
  },
  data() {
    return {
      currentRoute: window.location.pathname,
      routes
    };
  },
  computed: {
    ViewComponent() {
      return this.routes[this.currentRoute] || this.NotFound;
    }
  },
  render(h) {
    return h(this.ViewComponent);
  }
};
</script>

