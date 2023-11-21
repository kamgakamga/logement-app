import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DESCRIPTION_TITLE, EQUIPEMENT_TITLE } from 'src/app/constante';
import Logement from 'src/app/models/logement';
import { LogementService } from 'src/app/services/logement.service';

@Component({
  selector: 'app-detail-logement',
  templateUrl: './detail-logement.component.html',
  styleUrls: ['./detail-logement.component.css'],
})
export class DetailLogementComponent implements OnInit {
  public logement: Logement | undefined;
  public descriptionTitle: string = DESCRIPTION_TITLE;
  public equipementTitle: string = EQUIPEMENT_TITLE;
  constructor(
    private route: ActivatedRoute,
    private logementService: LogementService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const logementId = params['id']; // Convertion de l'ID en nombre

      // Utilisez logementId pour récupérer les détails du logement depuis votre service ou autre source de données
      this.logementService.getLogementById(logementId).subscribe(
        (logement) => {
          this.logement = logement;
        },
        (error) => {
          console.error(
            "Une erreur s'est produite lors de la récupération du logement :",
            error
          );
        }
      );
      console.log('logement:', this.logement);
    });
  }
}
