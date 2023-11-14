import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListLogementComponent } from './components/list-logement/list-logement.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { AppRoutingModule } from './app.routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BaniereComponent } from './components/baniere/baniere.component';
import { AproposComponent } from './components/apropos/apropos.component';

@NgModule({
  declarations: [
    AppComponent,
    BaniereComponent,
    AproposComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    ListLogementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation : false}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
