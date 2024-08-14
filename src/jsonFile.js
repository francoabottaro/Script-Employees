/* eslint-disable no-undef */
const fs = require("fs");
module.exports = function jsonFile(employees) {
  // JSON folder
  const dirJson = `${__dirname}/json`;
  if (!fs.existsSync(dirJson)) {
    fs.mkdirSync(dirJson);
  }

  // JSON File
  fs.writeFileSync(
    `${__dirname}/json/employees.json`,
    JSON.stringify(employees, null, 2),
    "utf-8",
  );
};
