import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Logement from 'src/app/models/logement';
import { LogementService } from 'src/app/services/logement.service';

@Component({
  selector: 'app-list-logement',
  templateUrl: './list-logement.component.html',
  styleUrls: ['./list-logement.component.css']
})
export class ListLogementComponent implements OnInit {


/****************************** Déclaration des attributs *****************/
logementList: Logement[] ;
logementSelected: Logement|undefined;


  constructor(private router:Router, private logementService:LogementService) { }

  ngOnInit(): void {
    this.logementService.getLogementList().subscribe(logementList =>{this.logementList = logementList});
    console.log(this.logementList);
  }



  goToLogement(logement: Logement):void{
 
    //On redirige vers la page d'acceuil
    console.log(logement.cover);
    
        this.router.navigate(['/logement/', logement.id]);

 }

}
