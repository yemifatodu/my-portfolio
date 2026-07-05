const fs = require("fs");
let c = fs.readFileSync("src/App.jsx", "utf8");

// 1. Add line-clamp-2 to description
c = c.replace(
  "text-slate-500 dark:text-slate-400 text-sm leading-relaxed\">{project.description}",
  "text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-2\">{project.description}"
);

// 2. Add impact line after description paragraph
c = c.replace(
  "</p>\n                        \n                        <div className=\"space-y-1.5 pt-2 text-xs md:text-sm\">",
  "</p>\n                        <p className=\"text-sm text-indigo-500 dark:text-indigo-400 font-semibold\">↗ {project.impact}</p>\n                        <div className=\"space-y-1.5 pt-2 text-xs md:text-sm\">"
);

fs.writeFileSync("src/App.jsx", c);
console.log("Done");
