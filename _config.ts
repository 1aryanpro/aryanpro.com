import lume from "lume/mod.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume({
  location: new URL("https://aryanpro.com"),
});

site
.use(postcss())
.copy("./assets", ".");

export default site;
