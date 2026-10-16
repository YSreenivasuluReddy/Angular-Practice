import { Routes } from '@angular/router';
import { ReadComponent } from './components/read/read.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';

export const routes: Routes = [
    {path:'create', component: CreateComponent },
    {path:'read',component:ReadComponent},
    {path:'update/:id',component:UpdateComponent},
    {path:'delete/:id',component:DeleteComponent},
    {path:'',redirectTo: 'create', pathMatch: 'full' }
];
