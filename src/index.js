const Chance = require("chance");
const chance = new Chance();
const jsonFile = require("./jsonFile");
const sqlFile = require("./sqlFile");

const employees = [];

// * Date
function create_date() {
  const year = chance.year({ min: 2021, max: 2023 });
  const month = ("0" + chance.month({ raw: true }).numeric).slice(-2);
  const day = ("0" + chance.integer({ min: 1, max: 28 })).slice(-2);
  return `${day}-${month}-${year}`;
}
// * Length
const lengthEmployees = 50;

for (let i = 0; i < lengthEmployees; i++) {
  // * S
  const min = chance.pickone(["00", "15", "30", "45"]);
  const hours_per_day = chance.pickone([8, 9]);

  // *
  const work_time = chance.integer({ min: 8, max: 10 });
  const hours_finish = hours_per_day + work_time;
  const work_schedule = `${work_time}:${min}-${hours_finish}:${min}`;

  // * insert array employees
  employees.push({
    id: i,
    name: chance.name(),
    position: chance.pickone([
      "Desarrollador",
      "Diseñador",
      "Gerente",
      "Analista",
      "Administrativa",
      "Contador",
    ]),
    start_date: create_date(),
    work_time: `${hours_per_day}:${min}`,
    hours_per_day,
    work_schedule: `Lunes a Viernes, ${work_schedule}hs`,
  });
}
jsonFile(employees);
sqlFile(employees, lengthEmployees);
