import { Component } from '@angular/core';
import { SOCIALS } from './socials.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  socials = SOCIALS;
}
