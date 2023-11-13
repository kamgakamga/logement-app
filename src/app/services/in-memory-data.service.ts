import { Injectable } from '@angular/core';
import LOGEMENTS from '../datas/mocks-logement';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const logements = LOGEMENTS;
    return {logements};
  }
}