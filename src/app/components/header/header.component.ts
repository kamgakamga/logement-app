import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public isAcceil:boolean= true
  public isApropos:boolean= false

  constructor(private router:Router) { }


  public goToAProposPage() :void {
    console.log("redirection vers la page A propos");
    this.router.navigate(['/logement/a-propos']);
    if(this.isAcceil){
    this.isApropos = true;
    this.isAcceil = false;
    }
  }
  public  goToAccueilPage():void{
    console.log("redirection vers la page Acceuil");
    this.router.navigate(['/']);
    if(this.isApropos){
       this.isAcceil = true;
       this.isApropos = false;
    }
  }
}
