import { Component } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { GitReposService } from '../services/git-repos.service';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent {
  repos$: Observable<any[]>;
  private destroy$ = new Subject<void>();
  constructor(private gitReposService: GitReposService) { } 
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
  
}
