import { Component, OnInit } from '@angular/core';
import { Fournisseur } from '../Models/fournisseur';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FournisseurService } from '../Service/fournisseur.service';

@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.css']
})
export class AddFournisseurComponent implements OnInit {

  f:Fournisseur=new Fournisseur();

  message="";
  ajout=false;

  reactiveForm=new FormGroup({
  code: new FormControl('', [Validators.required]),
  libelle: new FormControl('', [Validators.required]),
  categorie: new FormControl('', [Validators.required, Validators.minLength(3)]),
  

})

  constructor(private fournisseurService:FournisseurService) { }

  ngOnInit(): void {
  }

  saveFournisseur(){
    console.log(this.reactiveForm);
    let f = this.reactiveForm.getRawValue();
    console.log("f = ", f);
    this.fournisseurService.addFournisseur(f).subscribe();
    this.message='Fournisseur ajouté avec suucés !'
    this.ajout=true;

  }
  get code(){
    return this.reactiveForm.get('code');
  }
  get libelle(){
    return this.reactiveForm.get('libelle');
  }
  get categorie(){
    return this.reactiveForm.get('categorie');
  }

 

}
