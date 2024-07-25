import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {

  @Input() heading: string = '';
  @Input() description: string = '';
  @Input() bullets: string[] = [];
  @Input() icons: {src: string, alt: string}[] = [];

}
