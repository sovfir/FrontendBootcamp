import { FrontendDeveloper } from "./FrontendDeveloper.js";
import { BackendDeveloper } from "./BackendDeveloper.js";
import { Manager } from "./Manager.js";
import { Employee } from "./Employee.js";

export class Company {
  constructor(companyName) {
    this.companyName = companyName;
    this.currentProjects = [];
    this.completedProjects = [];
    this.staff = {
      Developers: [],
      Managers: [],
    };
  }

  addNewCompanyMember(employee) {
    employee.company = this.companyName;
    if (
      employee instanceof FrontendDeveloper ||
      employee instanceof BackendDeveloper
    ) {
      this.staff.Developers.push(employee);
    } else if (employee instanceof Manager) {
      this.staff.Managers.push(employee);
    }
  }

  addProject(project) {
    this.currentProjects.push(project);
  }

  getMembersQuantity() {
    return this.staff.Developers.length + this.staff.Managers.length;
  }

  completeProject(project) {
    const index = this.currentProjects.indexOf(project);
    if (index !== -1) {
      this.currentProjects.splice(index, 1);
      project.team.manager.projectQuantity += 1;
      const backendDevelopers = project.team.developers.backend;
      backendDevelopers.forEach(dev => 
      {
      dev.projectQuantity += 1
      });

        const frontDevelopers = project.team.developers.frontend;
        frontDevelopers.forEach(dev => 
      {
        dev.projectQuantity += 1;
      });
    }
    this.completedProjects.push(project);
  }
}
