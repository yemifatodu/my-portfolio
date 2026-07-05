const fs = require("fs");
let c = fs.readFileSync("src/App.jsx", "utf8");

c = c.replace(
  /<div className="grid grid-cols-4 gap-2 pt-2">[\s\S]*?<\/div>\s*<\/CardContent>/,
  `{isHuuboi ? (
                        <div className="grid grid-cols-3 gap-2 pt-2">
                          <a href={project.blog} target="_blank" rel="noopener noreferrer" className="w-full">
                            <Button variant="outline" size="sm" className="w-full text-xs font-medium border-slate-200 dark:border-slate-800 bg-transparent">Live Portal</Button>
                          </a>
                          <a href={project.dashboard} target="_blank" rel="noopener noreferrer" className="w-full">
                            <Button variant="outline" size="sm" className="w-full text-xs font-medium border-slate-200 dark:border-slate-800 bg-transparent">Flight Search</Button>
                          </a>
                          <a href={project.repo} target="_blank" rel="noopener noreferrer" className="w-full">
                            <Button variant="outline" size="sm" className="w-full text-xs font-medium border-slate-200 dark:border-slate-800 bg-transparent">Car Rental</Button>
                          </a>
                        </div>
                      ) : (
                        <Link to={\`/projects/\${project.slug}\`} className="w-full">
                          <Button size="sm" className="w-full text-xs font-medium bg-indigo-600 text-white hover:bg-indigo-500">View Full Project →</Button>
                        </Link>
                      )}
                    </CardContent>`
);

fs.writeFileSync("src/App.jsx", c);
console.log("Done");
