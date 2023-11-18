import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListLogementComponent } from "./components/list-logement/list-logement.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { AproposComponent } from "./components/apropos/apropos.component";
import { DetailLogementComponent } from "./components/detail-logement/detail-logement.component";


const routes : Routes=[
   //declation route    
    {path:'logements' , component:ListLogementComponent},  
    {path:'logement/a-propos' , component:AproposComponent},  
    {path:'logement/:id' , component:DetailLogementComponent},  
    {path:'' , redirectTo:'logements', pathMatch:'full'},      
    {path:'**' , component:PageNotFoundComponent},    
]
@NgModule(
        {
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]

        }
)
export class AppRoutingModule {

        
}