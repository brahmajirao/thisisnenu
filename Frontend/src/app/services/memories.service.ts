import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MemoryItem } from '../interfaces/memoryItem';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MemoriesService {
  private serviceUrl = 'http://127.0.0.1:5000/memories';

  constructor(private http:HttpClient) { }

  getMemories():Observable<MemoryItem[]>{
    return this.http.get<MemoryItem[]>(this.serviceUrl).pipe(map(response=>response))
  }

  getMemory(id):Observable<MemoryItem>{
    return this.http.get<MemoryItem>(this.serviceUrl).pipe(map(response=>response))
  }
}
