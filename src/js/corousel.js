// import Glide, { Controls, Breakpoints } from "@glidejs/glide";
import Glide, {
  Controls,
  Breakpoints,
  Autoplay,
} from "@glidejs/glide/dist/glide.modular.esm";

const glideClasses = ["glide", "glide-two"];
glideClasses.forEach((className) => {
  new Glide("." + className, {
    type: "carousel",
    autoplay: 3000,
    keyboard: true,
    hoverpause: false,
    focusAt: 1,
    startAt: 1,
  }).mount({ Controls, Breakpoints, Autoplay });
});
