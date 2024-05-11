import { Component } from '@angular/core';
import { TypingEffectDirective } from '../../shared/directives/typingEffect';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TypingEffectDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
