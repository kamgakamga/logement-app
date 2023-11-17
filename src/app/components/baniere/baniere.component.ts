import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-baniere',
  templateUrl: './baniere.component.html',
  styleUrls: ['./baniere.component.css']
})
export class BaniereComponent {
  @Input() public baniereMessage: string = 'Chez vous, partout et ailleurs';
  @Input() public imagePath: string;



 
}
