import { Employee } from "./Employee.js";

export class FrontendDeveloper extends Employee {
  constructor(name, grade, company) {
    super(name, grade, company);
    this.projectQuantity = 0;
    this.stack = [];
    this.developerSide = "frontend";
  }
  expandStack(someTech) {
    this.stack.push(someTech);
  }
}


