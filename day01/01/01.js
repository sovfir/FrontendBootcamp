class Employee {
  constructor(name, grade, company) {
    this.name = name;
    this.grade = grade;
    this.hardSkills = [];
    this.company = company;
  }

  changeCompany(newCompanyName) {
    this.company = newCompanyName;
  }

  upGrade() {
    if (this.grade === "L1") {
      this.grade = "L2";
    } else if (this.grade === "L2") {
      this.grade = "L3";
    } else if (this.grade === "L3") {
      this.grade = "L4";
    }
  }
  addSkill(newSkillName) {
    this.hardSkills.push(newSkillName);
  }
}

let boy = new Employee("jhon", "L1", "Apple");
console.log(boy.name);
console.log(boy.grade);
boy.addSkill("Python");
boy.addSkill("SQL");
boy.upGrade();
console.log(boy.hardSkills);
boy.changeCompany("CocaCola");
console.log(boy.company);
console.log(boy.grade);
