const fs = require("fs");
let c = fs.readFileSync("src/App.jsx", "utf8");

c = c.replace(
  /<div className="space-y-1\.5 pt-2 text-xs md:text-sm">[\s\S]*?<\/div>/,
  ""
);

fs.writeFileSync("src/App.jsx", c);
console.log("Done");
