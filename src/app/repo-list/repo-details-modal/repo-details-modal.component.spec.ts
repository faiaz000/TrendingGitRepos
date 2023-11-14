import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { GithubRepo } from 'src/app/interfaces/github-api.interface';
import { RepoDetailsModalComponent } from './repo-details-modal.component';
import { RepoItemComponent } from '../repo-item/repo-item.component';
import { RatingComponent } from 'src/app/shared/rating/rating.component';
import {  MatCardModule } from '@angular/material/card';
let mockDialogRef = { close: jasmine.createSpy('close') };
describe('RepoDetailsModalComponent', () => {
  let component: RepoDetailsModalComponent;
  let fixture: ComponentFixture<RepoDetailsModalComponent>;
  const mockRepo: GithubRepo =
  {
    name: 'Repo 1',
    description: 'Description 1',
    stargazers_count: 100,
    open_issues_count: 10,
    created_at: '2022-01-01T00:00:00Z',
    owner: { login: 'User1', avatar_url: 'https://github.com/user1.png' },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepoDetailsModalComponent, RepoItemComponent, RatingComponent],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: { repo: mockRepo } }
      ],
      imports: [MatCardModule,MatDialogModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit ratingChange event when closeDialog is called', () => {
    spyOn(component.ratingChange, 'emit');
    component.closeDialog();
    expect(component.ratingChange.emit).toHaveBeenCalledWith(component.rating);
    expect(mockDialogRef.close).toHaveBeenCalled(); 
  });

  it('should update rating when handleRatingChange is called', () => {
    const newRating = 5;
    component.handleRatingChange(newRating);
    expect(component.rating).toBe(newRating);
  });
});
