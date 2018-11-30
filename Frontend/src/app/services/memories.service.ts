import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MemoryItem } from '../interfaces/memoryItem';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MemoriesService {
  private allServiceUrl = 'http://127.0.0.1:5000/memories';
  private memoryServiceUrl = 'http://127.0.0.1:5000/memory/';

  constructor(private http:HttpClient) { }

  getMemories():Observable<MemoryItem[]>{
    return this.http.get<MemoryItem[]>(this.allServiceUrl).pipe(map(response=>response))
  }

  getMemory(id):Observable<MemoryItem>{
    return this.http.get<MemoryItem>(this.memoryServiceUrl+id).pipe(map(response=>response))
  }

  saveMemory(id: Number, data: MemoryItem ):Observable<MemoryItem>{
    return this.http.put<MemoryItem>(this.memoryServiceUrl+id, data).pipe(map(response=>response))
  }
}
