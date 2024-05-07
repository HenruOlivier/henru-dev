import { Component } from '@angular/core';
import { IntroPageComponent } from '../intro-page/intro-page.component';
import { DevExperienceComponent } from '../dev-experience/dev-experience.component';

@Component({
  selector: 'app-content-outlet',
  standalone: true,
  imports: [IntroPageComponent, DevExperienceComponent],
  templateUrl: './content-outlet.component.html',
  styleUrl: './content-outlet.component.scss'
})
export class ContentOutletComponent {

}
