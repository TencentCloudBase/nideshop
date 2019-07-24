const sqlite = require("think-model-sqlite");
const pt = require("path");

module.exports = {
  handle: sqlite, // Adapter handle
  path: pt.join(think.ROOT_PATH), // sqlite 保存的目录
  database: "nideshop",
  prefix: "nideshop_"
};
