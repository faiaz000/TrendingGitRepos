import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ViewChild } from '@angular/core';
import { GitReposService } from '../services/git-repos.service';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import { RepoDetailsModalComponent } from './repo-details-modal/repo-details-modal.component';
import { GithubRepo, RatedGithubRepo } from '../interfaces/github-api.interface';


@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent implements OnInit {
  repos$: Observable<RatedGithubRepo[]>;
  private destroy$ = new Subject<void>();
  constructor(private gitReposService: GitReposService, private dialog: MatDialog) { } 
  totalCount: number = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.repos$ = this.loadRepos();
  }
  ngAfterViewInit(): void {
    
    this.paginator.page.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.repos$ = this.loadRepos(this.paginator.pageIndex + 1);
    });
  
  }
  
  loadRepos(page: number = 1): Observable<GithubRepo[]> {
    return this.gitReposService.getMostStarredRepos(String(page)).pipe(
      tap(results => {
        this.totalCount = results.total_count;
      }),
      map(results => results.items)
    );
  }

  openRepoDetailsModal(repo: RatedGithubRepo): void {

    const dialogRef = this.dialog.open(RepoDetailsModalComponent, {
      data: { repo }
    });
    dialogRef.componentInstance.ratingChange.subscribe((newRating: number) => {
      repo.rating = newRating;
    });

  }
  
}
