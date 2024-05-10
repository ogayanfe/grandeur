import EmblaCarousel from "embla-carousel";

const emblaNode = document.querySelector(".embla");
const options = { loop: true };
const emblaApi = EmblaCarousel(emblaNode, options);

console.log(emblaApi);
