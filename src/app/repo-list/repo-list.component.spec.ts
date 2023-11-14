import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { of } from 'rxjs';
import { RepoListComponent } from './repo-list.component';
import { GitReposService } from '../services/git-repos.service';
import { mockRepos } from '../mocks/mockdata';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RepoItemComponent } from './repo-item/repo-item.component';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { fakeAsync, tick } from '@angular/core/testing';

describe('RepoListComponent', () => {
  let component: RepoListComponent;
  let fixture: ComponentFixture<RepoListComponent>;
  let gitReposService: GitReposService;

  beforeEach(async () => {
    const gitReposServiceMock = {
      getMostStarredRepos: jasmine.createSpy('getMostStarredRepos').and.returnValue(of({ total_count: 5, items: mockRepos })),
    };

    await TestBed.configureTestingModule({
      declarations: [ RepoListComponent, RepoItemComponent ],
      imports: [ MatPaginatorModule, MatDialogModule ],
      providers: [
        { provide: GitReposService, useValue: gitReposServiceMock },
        { provide: MatPaginator, useValue: { page: of({}), length: 0 } },
      ],
      schemas: [ NO_ERRORS_SCHEMA ] 
    })
    .compileComponents();

    gitReposService = TestBed.inject(GitReposService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should load repos', () => {
    component.loadRepos();
    expect(gitReposService.getMostStarredRepos).toHaveBeenCalled();
    component.repos$.subscribe(repos => {
      expect(repos).toEqual(mockRepos);
    });
  });

  it('should create one app-repo-item for each repo', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('app-repo-item').length).toEqual(mockRepos.length);
  });

  it('should pass correct repo data to app-repo-item', () => {
    const repoItemElements = fixture.debugElement.queryAll(By.directive(RepoItemComponent));
    for (let i = 0; i < repoItemElements.length; i++) {
      expect(repoItemElements[i].componentInstance.repo).toEqual(mockRepos[i]);
    }
  });

  it('should set paginator length to total count', fakeAsync(() => {
    component.ngOnInit();
    component.ngAfterViewInit();
    tick();
    fixture.detectChanges();
    expect(component.totalCount).toEqual(5);
    expect(component.paginator.length).toEqual(5);
  }));
});