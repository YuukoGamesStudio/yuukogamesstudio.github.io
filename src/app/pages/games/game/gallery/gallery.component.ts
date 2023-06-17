import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Screenshot } from '@pages/games/games.model';
import {
  Gallery,
  GalleryItem,
  ImageItem,
  ImageSize,
  ThumbnailsPosition,
} from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent implements OnInit {
  @Input() images: Screenshot[] = [];
  items: GalleryItem[] = [];

  constructor(public gallery: Gallery, public lightbox: Lightbox) {}

  ngOnInit(): void {
    this.items = this.images.map(item => new ImageItem({ src: item.url, thumb: item.url }));


    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
  }
}
