import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SkillsInterface } from '../../interfaces/skills.interface';
import { skills } from '../../mocks/skills.mock';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() {
  }

  getSkills(): Observable<SkillsInterface[]> {
    return of(skills);
  }
}
