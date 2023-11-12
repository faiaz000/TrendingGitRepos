import { Component } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { GitReposService } from '../services/git-repos.service';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent {
  repos:any[] = [];
  constructor(private gitReposService: GitReposService) { } 
  totalCount = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(): void {
    this.paginator.page.subscribe(() => {
      this.loadRepos(this.paginator.pageIndex + 1);
    });

    this.loadRepos();
  }
  
  loadRepos(page: number = 1): void {
    this.gitReposService.getMostStarredRepos(String(page)).subscribe(data => {
      if (data) {
        this.repos = data.items;
        this.totalCount = data.total_count;
      }
    });
  }

}
