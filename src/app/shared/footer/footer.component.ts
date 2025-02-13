import { Component } from '@angular/core';
import { UnpicImageDirective } from '@unpic/angular';
import { SOCIALS } from './socials.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [UnpicImageDirective],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  socials = SOCIALS;
}
