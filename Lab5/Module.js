const moduleObj = {
  id: "m1",
  name: "Intro to Node Servers",
  description: "Node.js servers with Express.",
  course: "Web Development",
};

export default function Module(app) {
  const getModule = (req, res) => {
    res.json(moduleObj);
  };

  const getModuleName = (req, res) => {
    res.json(moduleObj.name);
  };

  const setModuleName = (req, res) => {
    const { newName } = req.params;
    moduleObj.name = newName;
    res.json(moduleObj);
  };

  const setModuleDescription = (req, res) => {
    const { newDescription } = req.params;
    moduleObj.description = newDescription;
    res.json(moduleObj);
  };

  app.get("/lab5/module", getModule);
  app.get("/lab5/module/name", getModuleName);
  app.get("/lab5/module/name/:newName", setModuleName);
  app.get("/lab5/module/description/:newDescription", setModuleDescription);
}
