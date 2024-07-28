const Service = require("node-windows").Service;

const svc = new Service({
  name: "nodeServer",
  description: "This is Backend Node.js service",
  script: "C:\\Backend\\BIGCRM-API\\index.js",
});

svc.on("install", function () {
  svc.start();
});

svc.install();