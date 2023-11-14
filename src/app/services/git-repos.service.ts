import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class GitReposService {

  constructor(private http: HttpClient) { }

  getDateStringFor30DaysAgo(): string {
    const date = new Date();
    date.setDate(date.getDate() - 30);
    return date.toISOString().split('T')[0];
  }
  getMostStarredRepos(page?: string): Observable<any> {
    const date30DaysAgo = this.getDateStringFor30DaysAgo();
    let url = `https://api.github.com/search/repositories?q=created:>${date30DaysAgo}&sort=stars&order=desc`;
    if (page) {
      url += `&page=${page}`;
    }
    return this.http.get(url);
  }
}
