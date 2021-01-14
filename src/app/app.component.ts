import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  controlsDemo0 = [
    { label: 'Label', icon: 'favorite' },
    { label: 'Label', img: 'https://via.placeholder.com/150' },
    { label: 'Label', img: 'https://svgur.com/i/T78.svg' },
    { label: 'Label' },
    { label: 'Label' }];
  controlsDemo1 = [
    { label: 'Label' },
    { label: 'Label', selected: true },
    { label: 'Label' }];
  controlsDemo2 = [
    { label: 'Label' },
    { label: 'Label' }];
  controlsDemo3 = [
    { label: 'Label', icon: 'image' },
    { label: 'Label', icon: 'image' }
  ];
}
