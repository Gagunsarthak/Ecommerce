import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductComponent } from './components/edit-product/edit-product.component';

const routes: Routes = [
  { path: 'edit/:id', component: EditProductComponent },
  { path: 'add', component: EditProductComponent },
  { path: 'home', component: HomeComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
