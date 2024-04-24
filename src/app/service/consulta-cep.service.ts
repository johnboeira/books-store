import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {
  private utl_API: string = 'https://viacep.com.br/ws/'

  constructor(private httpClient: HttpClient) { }

  consultaCEP(cep: string){
    return this.httpClient.get(`${this.utl_API}${cep}/json`);
  }

}
