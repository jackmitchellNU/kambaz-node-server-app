import PathParameters from "./PathParameters.js";
import QueryParameters from "./QueryParameters.js";
import Module from "./Module.js";
import WorkingWithArrays from "./WorkingWithArrays.js";

export default function Lab5(app) {
  app.get("/lab5/welcome", (req, res) => {
    res.send("Welcome to Lab 5");
  });
  QueryParameters(app);
  PathParameters(app);
  Module(app);
  WorkingWithArrays(app);
}
