import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postValue: String;
  constructor() { }

  ngOnInit() {
  }

  postMessage(): void {
    console.log(this.postValue);
  }
}
