import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListLogementComponent } from "./components/list-logement/list-logement.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
// import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";


const routes : Routes=[
        //declation route    
    {path:'logements' , component:ListLogementComponent},    
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