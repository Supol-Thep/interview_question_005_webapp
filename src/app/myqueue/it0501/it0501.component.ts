import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { QueueItem } from '../../model/queue.model';
import { QueueService } from '../../service/queue.service';

@Component({
  selector: 'app-it0501',
  imports: [],
  templateUrl: './it0501.component.html',
  styleUrl: './it0501.component.css',
})
export class IT0501Component {
  private router = inject(Router);
  private queueService = inject(QueueService);

  loading = signal(false);
  error = signal('');

  goIt0502() {
    this.callThenShow(this.queueService.newQueue(), '/it0502');
  }

  goIt0503() {
    this.callThenShow(this.queueService.getCurrentQueue(), '/it0503');
  }

  private callThenShow(request: Observable<QueueItem>, path: string) {
    this.loading.set(true);
    this.error.set('');

    request.subscribe({
      next: (item) => this.router.navigate([path], { state: { item } }),
      error: () => {
        this.loading.set(false);
        this.error.set('ไม่สามารถทำรายการได้ กรุณาลองใหม่อีกครั้ง');
      },
    });
  }
}
