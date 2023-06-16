import { Component } from '@angular/core';
import { MEMBERS } from './about-us.model';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  members = MEMBERS;
}
