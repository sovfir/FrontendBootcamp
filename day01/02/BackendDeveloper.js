import { Employee } from "./Employee.js";

export class BackendDeveloper extends Employee {
  constructor(name, grade, company) {
    super(name, grade, company);
    this.projectQuantity = 0;
    this.stack = [];
    this.developerSide = "backend";
  }
  expandStack(someTech) {
    this.stack.push(someTech);
  }
}
