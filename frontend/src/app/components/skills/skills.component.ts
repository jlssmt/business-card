import { Component, OnInit } from '@angular/core';
import { SkillsInterface } from '../../../interfaces/skills.interface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  data: SkillsInterface[] = [
    {
      groupName: 'Professional',
      skills: [
        { skillName: 'Angular', percentage: 90 },
        { skillName: 'NodeJS', percentage: 80 }
      ]
    },
    {
      groupName: 'Personal',
      skills: [
        { skillName: 'Angular', percentage: 90 },
        { skillName: 'NodeJS', percentage: 80 }
      ]
    },
    {
      groupName: 'Software',
      skills: [
        { skillName: 'Angular', percentage: 90 },
        { skillName: 'NodeJS', percentage: 80 }
      ]
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
