import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { AddFournisseurComponent } from './add-fournisseur/add-fournisseur.component';
import { UpdateFournisseurComponent } from './update-fournisseur/update-fournisseur.component';

const routes: Routes = [
  { path: '', component: FournisseurComponent},
  { path: 'addFournisseur', component: AddFournisseurComponent},
  { path: 'updateFournisseur/:id', component: UpdateFournisseurComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
