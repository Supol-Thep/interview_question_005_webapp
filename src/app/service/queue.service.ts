import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

import { QueueItem, QueueResponse } from '../model/queue.model';

@Injectable({ providedIn: 'root' })
export class QueueService {
  private http = inject(HttpClient);
  private readonly baseUrl = 'https://localhost:44337/api/Queue';

  newQueue(): Observable<QueueItem> {
    return this.toItem(this.http.post<QueueResponse>(`${this.baseUrl}/newqueue`, null));
  }

  getCurrentQueue(): Observable<QueueItem> {
    return this.toItem(this.http.get<QueueResponse>(`${this.baseUrl}/getcurrentqueue`));
  }

  clearQueue(): Observable<void> {
    return this.http.post<QueueResponse>(`${this.baseUrl}/clearqueue`, null).pipe(
      map((res) => {
        if (res.code !== '200') {
          throw new Error(res.msg);
        }
      }),
    );
  }

  private toItem(response: Observable<QueueResponse>): Observable<QueueItem> {
    return response.pipe(
      map((res) => {
        const item = res.data?.[0];
        if (res.code !== '200' || !item) {
          throw new Error(res.msg);
        }
        return item;
      }),
    );
  }
}
