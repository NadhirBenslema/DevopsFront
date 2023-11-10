import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FournisseurService } from '../Service/fournisseur.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-fournisseur',
  templateUrl: './update-fournisseur.component.html',
  styleUrls: ['./update-fournisseur.component.css']
})
export class UpdateFournisseurComponent implements OnInit {

  fornisseur:any;
  id!:number;
  message="";
  ajout=false;

  updateForm=new FormGroup({
    code: new FormControl('', [Validators.required]),
    libelle: new FormControl('', [Validators.required]),
    categorie: new FormControl('', [Validators.required, Validators.minLength(2)]),  
  })

  constructor(private fournisseurService:FournisseurService,private R:Router ,private actR:ActivatedRoute) { }

  ngOnInit(): void {
    this.actR.paramMap.subscribe(data => this.id = Number(data.get('id')));
    console.log(this.id);
  }

  updateC(){
    console.log(this.updateForm);
    let c = this.updateForm.getRawValue();
    console.log("c = ", c);
    this.fournisseurService.updateFournisseur(this.id,c).subscribe(()=>
    this.R.navigate(['']));
  }
 
  get code(){
    return this.updateForm.get('code');
  }
  get libelle(){
    return this.updateForm.get('libelle');
  }
  get categorie(){
    return this.updateForm.get('categorie');
  }

  


}
