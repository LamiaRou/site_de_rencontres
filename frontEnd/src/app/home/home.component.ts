import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: any = [
    {
      image: '../../assets/carousel1.jpeg',
      text1: 'Real people. Real love ',
      text2: 'Take charge of your destiny'
    },
    {
      image: '../../assets/carousel2.jpg',
      text1: 'Your imperfections, someone will like them for you ',
      text2: 'Take charge of your destiny'
    },
    {
      image: '../../assets/carousel3.jpg',
      text1: 'Think bigger for your meetings',
      text2: 'TIn love too, be ambitious'
    }
  ]
  ;

  constructor() {
  }

  ngOnInit() {
  }

}
