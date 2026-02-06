import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
images = [
    {
      src: 'https://via.placeholder.com/300x200',
      title: 'Image One'
    },
    {
      src: 'https://via.placeholder.com/300x200',
      title: 'Image Two'
    },
    {
      src: 'https://via.placeholder.com/300x200',
      title: 'Image Three'
    },
    {
      src: 'https://via.placeholder.com/300x200',
      title: 'Image Four'
    },
    {
      src: 'https://via.placeholder.com/300x200',
      title: 'Image Five'
    },
    {
      src: 'https://via.placeholder.com/300x200',
      title: 'Image Six'
    }];
}
