import { Component, Input, OnInit} from '@angular/core';
import { APROPOS_DATE, IMAGE_COLLAPSE_DOWN } from 'src/app/constante';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent  implements OnInit {

           public dropdownImage:string = IMAGE_COLLAPSE_DOWN;
  @Input() public title:string;
  @Input() public content:string;

    public isOpen:boolean=false;

    ngOnInit(): void {
      console.log(this.content);
      
    }
  
    setIsOpen = (param:boolean)=>{
      this.isOpen = param;
  }
}
