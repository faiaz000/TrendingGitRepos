import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GithubRepo } from 'src/app/interfaces/github-api.interface';

@Component({
  selector: 'app-repo-item',
  templateUrl: './repo-item.component.html',
  styleUrls: ['./repo-item.component.scss']
})
export class RepoItemComponent {
  @Input() repo: GithubRepo;
  @Input() rating: number = 0;

  @Output() titleClick = new EventEmitter<void>();

  onTitleClick(): void {
    this.titleClick.emit();
  }
  
}
