import { Employee } from "./Employee.js";

export class Manager extends Employee {
  constructor(name, grade, company) {
    super(name, grade, company);
    this.projectQuantity = 0;
  }
  checkMember(minQualification, member) {
    if (member.company !== this.company) {
      return false;
    }
    if (minQualification !== member.grade) {
      return false;
    }
    return true;
  }
}

