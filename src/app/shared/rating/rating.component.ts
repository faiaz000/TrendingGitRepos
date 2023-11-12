import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  
  @Output() ratingChange = new EventEmitter<number>();
  rating = 0;

  setRating(rating: number): void {
    this.rating = rating;
    this.ratingChange.emit(this.rating);
  }
}
