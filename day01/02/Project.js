export class Project {
  constructor(name, minQualification, manager) {
    this.projectName = name;

    this.minQualification = minQualification;
    this.team = {
      manager: manager,
      developers: { backend: [], frontend: [] },
    };
  }

  addNewProjectMember(member) {
    if (this.team.manager.checkMember(this.minQualification, member)) {
      if (member.developerSide === "backend") {
        this.team.developers.backend.push(member);
      }
      if (member.developerSide === "frontend") {
        this.team.developers.frontend.push(member);
      }
    }
  }
}
