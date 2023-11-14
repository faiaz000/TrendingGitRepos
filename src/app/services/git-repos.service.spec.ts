import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GitReposService } from './git-repos.service';
import { mockRepos } from '../mocks/mockdata';
import { GithubRepoSearchResults } from '../interfaces/github-api.interface';

describe('GitReposService', () => {
  let service: GitReposService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GitReposService]
    });

    service = TestBed.inject(GitReposService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensure that there are no outstanding requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch most starred repos', () => {
    const mockData: GithubRepoSearchResults = {
      total_count: 5,
      items: mockRepos,
      incomplete_results: false,
    };

    service.getMostStarredRepos().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne(req => req.url.includes('https://api.github.com/search/repositories'));
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });
});
