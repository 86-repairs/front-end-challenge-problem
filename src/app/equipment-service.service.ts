import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipmentServiceService {

  constructor(public http: HttpClient) { }

  getEquipment() {
    // will get intercepted, since it ends with `/equipment` per the BackendInterceptor
    return this.http.get('/api/equipment');
  }
}
