import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import MD5 from "crypto-js/md5";

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(private httpClient:HttpClient) { }

  getHeroes(): any{
    let apiKey = '53ee6fa039aa932c782186a44afd06d9';
    let privateKey = '967d86143b62c997cb068ca22c53ad78d1b75e06';
    let hash = MD5(`1${privateKey}${apiKey}`);
    return this.httpClient.get(`${environment.urlBase}/characters?ts=1&apikey=${apiKey}&hash=${hash}&limit=100`)
    
  } 
}
