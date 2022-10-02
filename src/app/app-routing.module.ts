import { SearchComponent } from './search/search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path:'',
    component: NewComponent
  },
  {
    path:'search',
    component: SearchComponent
  },
  {
    path:'edit',
    component: EditComponent
  },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
