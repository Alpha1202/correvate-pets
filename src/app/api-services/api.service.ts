import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPet } from '../model/pet/pet.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  base_url = 'http://localhost/v2/';

  authLogin({ username, password }) {
    const url = `${this.base_url}user/login?username=${username}&password=${password}`;
    return this.http.get(url);
  }

  addPet(payload: IPet) {
    const url = `${this.base_url}pet`;
    return this.http.post<IPet>(url, payload);
  }

  showPets(status: String) {
    const url = `${this.base_url}pet/findByStatus?status=${status}`;
    return this.http.get(url);
  }
}
