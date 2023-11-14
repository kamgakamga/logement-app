import { Component} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {

    public isOpen:boolean=false;

    setIsOpen = (param:boolean)=>{
      this.isOpen = param;
  }
}
