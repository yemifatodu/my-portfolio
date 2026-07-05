const fs = require("fs");
let c = fs.readFileSync("src/App.jsx", "utf8");
c = c.replace(
  `                          </a>\n                        </div>`,
  `                          </a>\n                          <Link to={"/projects/" + project.slug} className="w-full">\n                            <Button size="sm" className="w-full text-xs font-medium bg-indigo-600 text-white hover:bg-indigo-500">View Details</Button>\n                          </Link>\n                        </div>`
);
fs.writeFileSync("src/App.jsx", c);
console.log("Done");
