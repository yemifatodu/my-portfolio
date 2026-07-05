const fs = require("fs");
let c = fs.readFileSync("src/App.jsx", "utf8");
const idx = c.lastIndexOf("</>") ;
c = c.substring(0, idx) + "</>} />\n    </Routes>";
c = c + "\n  );\n}";
fs.writeFileSync("src/App.jsx", c);
console.log("Done");
