import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap,catchError } from 'rxjs';
import Logement from '../models/logement';

@Injectable({
  providedIn: 'root'
})
export class LogementService {

  constructor(private http: HttpClient) { }


   // getPokemonList():Pokemon[]{
  //   return POKEMONS;
  // }

  getLogementList():Observable<Logement[]>{
    return this.http.get<Logement[]>('api/logements').pipe(
      tap((respose) => this.log(respose)),
      catchError((error)=>
        this.handlerError(error,[])
      )
    );
  }

  getLogementById(logementId: string):Observable<Logement|undefined>{
    console.log("LogementId="+logementId);
    
    return this.http.get<Logement>(`api/logements/${logementId}`).pipe(
      tap((reponse) => this.log(reponse)),
      catchError((error)=>
       this.handlerError(error, undefined)));
  }

  // getLogementById(logementId: number):Logement|undefined{
  //   return POKEMONS.find(logement => logement.id == l ogementId);
  // }



  private log(respose: Logement[]|Logement|undefined){
    console.table(respose);
  }
  private handlerError(error: Error, errorValue: any){
    console.error(error);
    return of(errorValue);
  }
}


