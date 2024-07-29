import { Component } from '@angular/core';
import { AddInViewOnceDirective } from '../../shared/directives/addInViewOnce';
import { TypingEffectDirective } from '../../shared/directives/typingEffect';
import { ToggleInViewDirective } from '../../shared/directives/toggleInViewClass';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-intro-page',
  standalone: true,
  imports: [CommonModule, AddInViewOnceDirective, TypingEffectDirective, ToggleInViewDirective],
  templateUrl: './intro-page.component.html',
  styleUrl: './intro-page.component.scss'
})
export class IntroPageComponent {

  copied: boolean = false;

  copyNumber() {
    const phoneNumber = '+27 82 828 9723';
    navigator.clipboard.writeText(phoneNumber)
        .then(() => {
            console.log('Phone number copied to clipboard');
            this.copied = true;
            setTimeout(() => {
              this.copied = false;
            }, 3000);
        })
        .catch(err => {
            console.error('Could not copy phone number: ', err);
        });
  }

  onCvClick() {
    window.open('assets/HenruOlivier-CV.pdf', '_blank');
  }

}