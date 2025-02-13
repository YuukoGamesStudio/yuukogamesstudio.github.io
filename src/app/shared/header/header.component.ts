import { Component } from '@angular/core';
import { UnpicImageDirective } from '@unpic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [UnpicImageDirective],
})
export class HeaderComponent {

}
