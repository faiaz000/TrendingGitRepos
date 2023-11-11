import { Component } from '@angular/core';
import { GitReposService } from '../services/git-repos.service';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent {
  repos:any;
  constructor(private gitReposService: GitReposService) { } 

  ngOnInit(): void {
    this.repos = this.gitReposService.getMostStarredRepos();
  }

}
