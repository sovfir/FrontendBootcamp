import { Employee } from "./Employee.js";
import { FrontendDeveloper } from "./FrontendDeveloper.js";
import { BackendDeveloper } from "./BackendDeveloper.js";
import { Project } from "./Project.js";
import { Company } from "./Company.js";
import { Manager } from "./Manager.js";

let boy = new Employee("Jhon", "L1", "Cocacola");
console.log(`New corporate slave ${boy.name} is spawned!`);

let corporation = new Company("Cocacola");
console.log(`New corporation ${corporation.companyName} established!`);

let karen = new Manager("Karen", "L2", "Cocacola");
console.log(`New manager ${karen.name} is spawned!`);

let project = new Project("Xfiles", "L1", karen);
console.log(
  `Project ${project.projectName} started! Manager is ${project.team.manager.name}. Minimal lvl is ${project.minQualification}`
);

console.log(`${project.team.manager.name} projectQuantity is ${project.team.manager.projectQuantity}`)

let dev1 = new BackendDeveloper("BackJhon", "L1", "Cocacola");
console.log(`Backend Dev ${dev1.name} now works in ${dev1.company}`);

let backdev2 = new BackendDeveloper("BackBilly", "L1", "Cocacola");
console.log(`Backend Dev ${backdev2.name} now works in ${backdev2.company}`);

let dev2 = new FrontendDeveloper("FrontAlex", "L1", "Cocacola");
console.log(`Frontend Dev ${dev2.name} now works in ${dev2.company}`);

let frontdev2 = new FrontendDeveloper("FrontJames", "L1", "Cocacola");
console.log(`Frontend Dev ${frontdev2.name} now works in ${frontdev2.company}`);


dev1.upGrade();
console.log(`${dev1.name} level is ${dev1.grade}`);
dev1.upGrade();
console.log(`${dev1.name} level is ${dev1.grade}`);

let corporation2 = new Company("Yandex");
console.log(`New corporation ${corporation2.companyName} established!`);

dev2.changeCompany("Yandex");
console.log(`${dev2.name} changed company to ${dev2.company}`);
frontdev2.expandStack("JavaScript");
console.log(`${frontdev2.name} learned something new! His stack is ${frontdev2.stack}`);
frontdev2.expandStack("SQL");
console.log(`${frontdev2.name} learned something new! His stack is ${frontdev2.stack}`);

corporation.addNewCompanyMember(karen);
corporation.addNewCompanyMember(dev1);
corporation.addNewCompanyMember(backdev2);
corporation.addNewCompanyMember(frontdev2);

corporation.addProject(project);
console.log(
  `${corporation.companyName} list of current projects: ${corporation.currentProjects[0].projectName}`
);

project.addNewProjectMember(backdev2);
project.addNewProjectMember(frontdev2);
console.log(`List of backend workers on project:  ${project.team.developers.backend[0].name} 
List of frontend workers on project:${project.team.developers.frontend[0].name} `)
console.log(`Karens number of compleated projects ${karen.projectQuantity} before project compleation`);
corporation.completeProject(project);
console.log(`Karens number of compleated projects ${karen.projectQuantity} after project compleation`);

console.log(
  `${corporation.companyName} list of completed projects: ${corporation.completedProjects[0].projectName}`
);

console.log(
  `Total number of ${
    corporation.companyName
  } workers ${corporation.getMembersQuantity()}`
);

