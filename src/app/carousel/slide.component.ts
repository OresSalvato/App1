import { Component, OnInit, OnDestroy, Input, HostBinding } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'slide',
 // templateUrl: './slide.component.html',
 // styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit, OnDestroy {
  ngOnDestroy: any;
  ngOnInit: any;
  @Input() public index: number;
  // @Input() public direction:Direction;

  @HostBinding('class.active')
  @Input() public active: boolean;

  @HostBinding('class.item')
  @HostBinding('class.carousel-item')
  public addClass: boolean = true;
  OnInit() { }
  OnDestroy() { }
}
