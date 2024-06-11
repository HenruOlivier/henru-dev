import { Component } from '@angular/core';
import { IntroPageComponent } from '../intro-page/intro-page.component';
import { DevExperienceComponent } from '../dev-experience/dev-experience.component';
import { EducationComponent } from '../education/education.component';
import { TechnologiesComponent } from '../technologies/technologies.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-content-outlet',
  standalone: true,
  imports: [IntroPageComponent, DevExperienceComponent, EducationComponent, TechnologiesComponent, ProjectsComponent],
  templateUrl: './content-outlet.component.html',
  styleUrl: './content-outlet.component.scss'
})
export class ContentOutletComponent {

}
