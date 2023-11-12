import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-repo-details-modal',
  templateUrl: './repo-details-modal.component.html',
  styleUrls: ['./repo-details-modal.component.scss']
})
export class RepoDetailsModalComponent {
 
  rating = 0;
  @Output() ratingChange = new EventEmitter<number>();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { repo: any },
    private dialogRef: MatDialogRef<RepoDetailsModalComponent>
  ) { }

  handleRatingChange(rating: number): void {
    this.rating = rating;
  }
  closeDialog(): void {
    this.ratingChange.emit(this.rating);
    this.dialogRef.close(this.rating);
  }
}
