import { Component } from '@angular/core';
import { TypingEffectDirective } from '../../shared/directives/typingEffect';

@Component({
  selector: 'app-dev-experience',
  standalone: true,
  imports: [TypingEffectDirective],
  templateUrl: './dev-experience.component.html',
  styleUrl: './dev-experience.component.scss'
})
export class DevExperienceComponent {

}
