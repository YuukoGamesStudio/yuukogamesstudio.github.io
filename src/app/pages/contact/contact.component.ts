import { Component } from '@angular/core';
import { SOCIALS } from '@shared/footer/socials.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  socials = SOCIALS;
}
