import { Component, Input, OnInit } from '@angular/core';
import {NEXT_IMAGE, PREVOUIS_IMAGE } from 'src/app/constante';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {


/************declaration des variables************/
  public previousImage:string = PREVOUIS_IMAGE;
  public nextImage:string = NEXT_IMAGE;
  @Input() public pictures:string[];
  public currentIndex:number = 0;

  /************declaration des fonction************/
  constructor() { }

  ngOnInit(): void {
  }


public handleNext():void {
  if (this.currentIndex === this.pictures.length - 1) {
      this.currentIndex = 0;
     }else {
      console.log(this.pictures[this.currentIndex + 1]);
      this.currentIndex = this.currentIndex + 1;
    }
};

public handlePrevious():void {
  console.log("previous...");
  if (this.currentIndex === 0) {
      this.currentIndex = this.pictures.length - 1;
  } else {
      this.currentIndex = this.currentIndex - 1;
  }
};

}