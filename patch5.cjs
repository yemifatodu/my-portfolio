const fs = require("fs");
let c = fs.readFileSync("src/App.jsx", "utf8");

c = c.replace(
  "text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-2\">{project.description}",
  "text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-2\">{project.description}"
);

c = c.replace(
  `className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">{project.description}`,
  `className={\`text-slate-500 dark:text-slate-400 text-sm leading-relaxed \${isHuuboi ? "" : "line-clamp-2"}\`}>{project.description}`
);

fs.writeFileSync("src/App.jsx", c);
console.log("Done");
