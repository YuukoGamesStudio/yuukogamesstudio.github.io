import { Component } from '@angular/core';
import { SOCIALS } from '@shared/footer/socials.model';
import { UnpicImageDirective } from '@unpic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [UnpicImageDirective],
})
export class ContactComponent {
  socials = SOCIALS;
}
