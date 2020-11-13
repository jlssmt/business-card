import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SkillsInterface } from '../../../interfaces/skills.interface';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  skills: Observable<SkillsInterface[]>;

  constructor(private mainService: MainService) {
  }

  ngOnInit(): void {
    this.skills = this.mainService.getSkills();
  }

}
