import { BeyBlog } from "./BeyBlog.js";
import { theseAuthors } from "./Authors.js"

const authorYeah = theseAuthors

const container = document.querySelector("#container");

const render = () => {
  container.innerHTML = BeyBlog();
};

render();
