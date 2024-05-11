import { Component } from '@angular/core';
import { TypingEffectDirective } from '../../shared/directives/typingEffect';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [TypingEffectDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {

}
