import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RepoListComponent } from './repo-list/repo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent, RepoListComponent ],
      imports: [ MatToolbarModule,MatDialogModule,MatPaginatorModule, HttpClientModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'trending-git-repos'`, () => {
    expect(component.title).toEqual('trending-git-repos');
  });

  it('should render title in a span tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('The Most starred repos in last 30 days');
  });

  it('should include the repo-list component', () => {
    const repoListComponent = fixture.debugElement.query(By.directive(RepoListComponent));
    expect(repoListComponent).not.toBeNull();
  });
});