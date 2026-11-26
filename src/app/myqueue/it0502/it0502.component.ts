import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { QueueItem } from '../../model/queue.model';

@Component({
  selector: 'app-it0502',
  imports: [DatePipe],
  templateUrl: './it0502.component.html',
  styleUrl: './it0502.component.css',
})
export class IT0502Component {
  private router = inject(Router);

  item: QueueItem | undefined = history.state?.item;

  ngOnInit() {
    if (!this.item) {
      this.back();
    }
  }

  back() { this.router.navigate(['']); }
}
