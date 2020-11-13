export interface SkillsInterface {
  readonly groupName: string;
  readonly skills: SkillListInterface[];
}

interface SkillListInterface {
  readonly skillName: string;
  readonly percentage: number;
}
