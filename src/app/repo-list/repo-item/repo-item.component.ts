import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-repo-item',
  templateUrl: './repo-item.component.html',
  styleUrls: ['./repo-item.component.scss']
})
export class RepoItemComponent {
  @Input() repo: any;
  @Input() rating = 0;

  @Output() titleClick = new EventEmitter<void>();

  onTitleClick(): void {
    this.titleClick.emit();
  }
  
}
