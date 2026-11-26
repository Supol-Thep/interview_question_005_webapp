export interface ApiResponse<T> {
  code: string;      
  msg: string;
  data: T[];
}

export interface QueueItem {
  seq: number | null;        
  queueNumber: string;      
  issuedAt: string | null;  
}

export type QueueResponse = ApiResponse<QueueItem>;