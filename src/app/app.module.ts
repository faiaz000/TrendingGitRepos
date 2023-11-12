import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { RepoItemComponent } from './repo-list/repo-item/repo-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from  '@angular/material/card'
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RatingComponent } from './shared/rating/rating.component';
import { RepoDetailsModalComponent } from './repo-list/repo-details-modal/repo-details-modal.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    
    AppComponent,
    RepoListComponent,
    RepoItemComponent,
    RatingComponent,
    RepoDetailsModalComponent,
    
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
