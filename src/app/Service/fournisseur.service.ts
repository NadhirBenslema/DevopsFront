import { Injectable } from '@angular/core';
import { Fournisseur } from '../Models/fournisseur';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  fournisseurList: Fournisseur[]= [];


  constructor( private http : HttpClient) { }

  //URL du Backend
  url = "http://localhost:8089/SpringMVC/fournisseur";
  endPoint_a="/retrieve-all-fournisseurs";

  getAllFournisseurs(){
    return this.http.get<Fournisseur[]>(this.url+this.endPoint_a);
  }
 
  endPoint_b="/add-fournisseur";
  addFournisseur(f:Fournisseur){
    return this.http.post<Fournisseur[]>(this.url+this.endPoint_b,f);
  }

  endPoint_c="/remove-fournisseur";
  deleteFournisseur(id:Number){
    return this.http.delete(this.url+this.endPoint_c+'/'+id);
  }

 endPoint_d="/retrieve-fournisseur";
 getFournisseurById(id:Number){
  return this.http.get<Fournisseur[]>(this.url+this.endPoint_d+'/'+id);
 }

 endPoint_g="/modify-fournisseur";
 updateFournisseur(idC:Number,c:Fournisseur){
  return this.http.put<Fournisseur>(this.url+this.endPoint_g+'/'+idC,c);
 }
 
}
