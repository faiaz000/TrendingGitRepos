import { Component } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ViewChild } from '@angular/core';
import { GitReposService } from '../services/git-repos.service';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { RepoDetailsModalComponent } from './repo-details-modal/repo-details-modal.component';


@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent {
  repos$: Observable<any[]>;
  private destroy$ = new Subject<void>();
  constructor(private gitReposService: GitReposService, private dialog: MatDialog) { } 
  totalCount = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(): void {
    this.paginator.page.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.repos$ = this.loadRepos(this.paginator.pageIndex + 1);
    });
  
    this.repos$ = this.loadRepos();
  }
  
  loadRepos(page: number = 1): Observable<any[]> {
    return this.gitReposService.getMostStarredRepos(String(page)).pipe(
      map(response => {
        this.totalCount = response.total_count;
        return response.items;
      })
    );
  }

  openRepoDetailsModal(repo: any): void {

    const dialogRef = this.dialog.open(RepoDetailsModalComponent, {
      data: { repo }
    });
    dialogRef.componentInstance.ratingChange.subscribe((newRating: number) => {
      repo.rating = newRating;
    });

  }
  
}
