import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { NotebooksService } from './services/notebooks.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    EditComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NotebooksService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
