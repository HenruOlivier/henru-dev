import { Component } from '@angular/core';
import { AddInViewOnceDirective } from '../../shared/directives/addInViewOnce';
import { TypingEffectDirective } from '../../shared/directives/typingEffect';

@Component({
  selector: 'app-intro-page',
  standalone: true,
  imports: [AddInViewOnceDirective, TypingEffectDirective],
  templateUrl: './intro-page.component.html',
  styleUrl: './intro-page.component.scss'
})
export class IntroPageComponent {

}
