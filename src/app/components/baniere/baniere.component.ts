import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baniere',
  templateUrl: './baniere.component.html',
  styleUrls: ['./baniere.component.css']
})
export class BaniereComponent implements OnInit {
public title: string="Chez vous, partout et ailleurs";

  constructor() { }

  ngOnInit(): void {
  }

}
