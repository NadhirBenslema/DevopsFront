import { Component, OnInit } from '@angular/core';
import { Fournisseur } from '../Models/fournisseur';
import { FournisseurService } from '../Service/fournisseur.service';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {

  fournisseurList:Fournisseur[]=[];

  id!:Number ;
  code!: string;
  libelle!: string;
  categorie!: string;

  specialite="";
  critere="";
  critereStat="";
  message="";
  affichage=false;
  messageAffectation="" ;
  messageStat="" ;

  constructor(private fournisseurService:FournisseurService) { }

  ngOnInit(): void {
    this.getFournisseurs();
  }
  getFournisseurs(){
    this.fournisseurService.getAllFournisseurs().subscribe(data =>this.fournisseurList=data);
  }

  deleteFournisseur(id:any){

    this.fournisseurService.deleteFournisseur(Number(id)).subscribe(()=>this.getFournisseurs());
    this.message='Fournisseur supprimé avec succés ! ';
    this.affichage=true;
  }

  getFById(){
    this.fournisseurService.getFournisseurById(this.id).subscribe(data => this.fournisseurList = data);
  }

}
