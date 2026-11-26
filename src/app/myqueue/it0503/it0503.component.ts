import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

import { QueueItem } from '../../model/queue.model';
import { QueueService } from '../../service/queue.service';

@Component({
  selector: 'app-it0503',
  imports: [],
  templateUrl: './it0503.component.html',
  styleUrl: './it0503.component.css',
})
export class IT0503Component {
  private router = inject(Router);
  private queueService = inject(QueueService);

  item = signal<QueueItem | undefined>(history.state?.item);
  loading = signal(false);
  error = signal('');

  ngOnInit() {
    if (!this.item()) {
      this.back();
    }
  }

  clear() {
    this.loading.set(true);
    this.error.set('');

    this.queueService.clearQueue().subscribe({
      next: () => {
        const item: QueueItem = { seq: null, queueNumber: '00', issuedAt: null };
        this.item.set(item);
        history.replaceState({ ...history.state, item }, '');
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.error.set('ไม่สามารถล้างคิวได้ กรุณาลองใหม่อีกครั้ง');
      },
    });
  }

  back() { this.router.navigate(['']); }
}
