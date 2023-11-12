import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoDetailsModalComponent } from './repo-details-modal.component';

describe('RepoDetailsModalComponent', () => {
  let component: RepoDetailsModalComponent;
  let fixture: ComponentFixture<RepoDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoDetailsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepoDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
