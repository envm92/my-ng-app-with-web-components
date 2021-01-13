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
    { label: 'Label', img: 'https://www.flaticon.com/svg/vstatic/svg/1828/1828108.svg?token=exp=1610405314~hmac=67ab7bd516c3212208bcaa356cf9faea' },
    { label: 'Label' },
    { label: 'Label' }];
  controlsDemo1 = [
    { label: 'Label' },
    { label: 'Label' },
    { label: 'Label' }];
  controlsDemo2 = [
    { label: 'Label' },
    { label: 'Label' }];
  controlsDemo3 = [
    { label: 'Label', icon: 'image' },
    { label: 'Label', icon: 'image' }
  ];
}
