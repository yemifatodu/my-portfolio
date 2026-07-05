const fs = require("fs");
let c = fs.readFileSync("src/App.jsx", "utf8");
c = c.replace(/  return \(\r?\n\s+<>\r?\n\s+<Helmet>/, "  return (\n    <Routes>\n      <Route path=\"/projects/:slug\" element={<ProjectPage />} />\n      <Route path=\"*\" element={<>\n        <Helmet>");
c = c.replace(/\s+<\/>\r?\n\s+\);\r?\n\}$/, "\n      </>} />\n    </Routes>\n  );\n}");
fs.writeFileSync("src/App.jsx", c);
console.log("Done");
