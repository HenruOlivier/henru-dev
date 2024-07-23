import { Component } from '@angular/core';
import { AddInViewOnceDirective } from '../../shared/directives/addInViewOnce';
import { TypingEffectDirective } from '../../shared/directives/typingEffect';
import { ToggleInViewDirective } from '../../shared/directives/toggleInViewClass';

@Component({
  selector: 'app-intro-page',
  standalone: true,
  imports: [AddInViewOnceDirective, TypingEffectDirective, ToggleInViewDirective],
  templateUrl: './intro-page.component.html',
  styleUrl: './intro-page.component.scss'
})
export class IntroPageComponent {

  copyNumber() {
    const phoneNumber = '+27 82 828 9723';
    navigator.clipboard.writeText(phoneNumber)
        .then(() => {
            console.log('Phone number copied to clipboard');
        })
        .catch(err => {
            console.error('Could not copy phone number: ', err);
        });
  }

  onCvClick() {
    window.open('assets/HenruOlivier-CV.pdf', '_blank');
  }

}