import { Component } from '@angular/core';
import { TypingEffectDirective } from '../../shared/directives/typingEffect';
import { AddInViewOnceDirective } from '../../shared/directives/addInViewOnce';
import { ToggleInViewDirective } from '../../shared/directives/toggleInViewClass';

@Component({
  selector: 'app-dev-experience',
  standalone: true,
  imports: [TypingEffectDirective, ToggleInViewDirective],
  templateUrl: './dev-experience.component.html',
  styleUrl: './dev-experience.component.scss'
})
export class DevExperienceComponent {

}
