import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RepoItemComponent } from './repo-item.component';
import { MatCardModule } from '@angular/material/card';
import { mockRepos } from 'src/app/mocks/mockdata';

describe('RepoItemComponent', () => {
  let component: RepoItemComponent;
  let fixture: ComponentFixture<RepoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoItemComponent ],
      imports: [ MatCardModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoItemComponent);
    component = fixture.componentInstance;
    component.repo = mockRepos[0];
    fixture.detectChanges();
  });

  it('should display repo name', () => {
    const titleElement = fixture.debugElement.query(By.css('mat-card-title'));
    expect(titleElement.nativeElement.textContent).toContain(mockRepos[0].name);
  });

  it('should display repo description', () => {
    const descriptionElement = fixture.debugElement.query(By.css('p'));
    expect(descriptionElement.nativeElement.textContent).toContain(mockRepos[0].description);
  });

  it('should display repo stars count', () => {
    const starsElement = fixture.debugElement.query(By.css('.repo-item .bordered'));
    expect(starsElement.nativeElement.textContent).toContain(`Stars: ${mockRepos[0].stargazers_count}`);
  });

  it('should emit titleClick event when title is clicked', () => {
    spyOn(component.titleClick, 'emit');
    const titleElement = fixture.debugElement.query(By.css('mat-card-title'));
    titleElement.triggerEventHandler('click', null);
    expect(component.titleClick.emit).toHaveBeenCalled();
  });
});