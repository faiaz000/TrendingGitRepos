import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { RepoItemComponent } from './repo-list/repo-item/repo-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from  '@angular/material/card'


@NgModule({
  declarations: [
    AppComponent,
    RepoListComponent,
    RepoItemComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
