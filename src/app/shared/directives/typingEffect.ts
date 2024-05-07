// typing-effect.directive.ts
import { Directive, ElementRef, Input, Renderer2, OnInit, OnDestroy } from '@angular/core';

@Directive({
    selector: '[typingEffect]',
    standalone: true
})
export class TypingEffectDirective implements OnInit, OnDestroy {
    @Input('typingEffect') text: string = '';
    @Input() delayTime: number = 0; // Delay time before typing starts in milliseconds
    private currentCharIndex = 0;
    private typingSpeed = 100; // Adjust this as needed
    private observer: IntersectionObserver | undefined;

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        // Initialize IntersectionObserver
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Start typing after a specified delay when element is in view
                setTimeout(() => this.startTypingEffect(), this.delayTime);
                // Disconnect the observer once it's started
                this.observer?.disconnect();
            }
            });
        });

        // Observe the element
        this.observer.observe(this.el.nativeElement);
    }

    ngOnDestroy() {
    // Disconnect the observer on destruction to prevent memory leaks
        if (this.observer) {
            this.observer.disconnect();
        }
    }

    startTypingEffect() {
        if (this.currentCharIndex < this.text.length) {
            this.el.nativeElement.innerHTML += this.text.charAt(this.currentCharIndex);
            this.currentCharIndex++;
            setTimeout(() => this.startTypingEffect(), this.typingSpeed);
        }
    }
}
