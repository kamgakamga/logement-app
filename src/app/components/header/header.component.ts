import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public isSelected:boolean= true

  constructor(private router:Router) { }


  public goToAProposPage() :void {
    console.log("redirection vers la page A propos");
    this.router.navigate(['/logement/a-propos']);
    if(this.isSelected){
    this.isSelected = !this.isSelected;
    }else{
      this.isSelected = true;
    }
  }
  public  goToAccueilPage():void{
    console.log("redirection vers la page Acceuil");
    this.router.navigate(['/']);
    if(!this.isSelected){
       this.isSelected = true;
    }else{
      this.isSelected = false;
    }
  }
}
