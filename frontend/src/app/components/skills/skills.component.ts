import { Component, Input, OnInit } from '@angular/core';
import { SkillsInterface } from '../../../interfaces/skills.interface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input()
  data: SkillsInterface[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
