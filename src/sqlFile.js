/* eslint-disable no-undef */
const fs = require("fs");
module.exports = function sqlFile(employees, lengthEmployees) {
  // ? sql fold
  const dirSql = `${__dirname}/sql`;
  if (!fs.existsSync(dirSql)) {
    fs.mkdirSync(dirSql);
  }

  // * SQL File
  let sqlInserts = `CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    position VARCHAR(50) NOT NULL,
    start_date DATE NOT NULL,
    work_time TIME NOT NULL,
    hours_per_day INT NOT NULL,
    work_schedule VARCHAR(50) NOT NULL
);
INSERT INTO employees ( name, position, start_date, work_time, hours_per_day, work_schedule) 
VALUES 
`;
  employees.forEach((employees, index) => {
    sqlInserts += `('${employees.name}', '${employees.position}', '${employees.start_date}', '${employees.work_time}', ${employees.hours_per_day}, '${employees.work_schedule}')`;
    if (index === lengthEmployees - 1) {
      sqlInserts += ";";
    } else {
      sqlInserts += ",\n";
    }
  });

  fs.writeFileSync(`${__dirname}/sql/employees.sql`, sqlInserts, "utf-8");
};
