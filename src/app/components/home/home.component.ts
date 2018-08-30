import { Component, OnInit } from '@angular/core';
import { posts } from '../../constants/posts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts = posts;

  constructor() { }

  ngOnInit() {
  }

}
