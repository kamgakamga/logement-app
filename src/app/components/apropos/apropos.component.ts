import { Component, OnInit } from '@angular/core';
import { APROPOS_DATE, IMAGE_BANNIERE_A_PROPOS } from 'src/app/constante';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.css']
})
export class AproposComponent implements OnInit {

/************declaration des variables************/
public dataApropos = APROPOS_DATE;
public title: string; 
public content:string;
public imageBaniereApropos:string = IMAGE_BANNIERE_A_PROPOS;
public baniereMessage:string = '';




/************declaration des fonction************/


  constructor() { }

  ngOnInit(): void {
  }

}
