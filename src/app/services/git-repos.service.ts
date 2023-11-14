import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { GithubRepoSearchResults } from '../interfaces/github-api.interface';

@Injectable({
  providedIn: 'root',
})
export class GitReposService {
  constructor(private http: HttpClient) {}

  getDateStringFor30DaysAgo(): string {
    const date = new Date();
    date.setDate(date.getDate() - 30);
    return date.toISOString().slice(0,10);
  }
  getMostStarredRepos(page?: string): Observable<GithubRepoSearchResults> {
    const date30DaysAgo = this.getDateStringFor30DaysAgo();
    const url = `https://api.github.com/search/repositories?q=created:>${date30DaysAgo}&sort=stars&order=desc${
      page ? `&page=${page}` : ''
    }`;
    return this.http.get<GithubRepoSearchResults>(url);
  }
}
