import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { MemoriesService } from '../services/memories.service';
import { MemoryItem } from '../interfaces/memoryItem';

@Component({
  selector: 'app-addmemory',
  templateUrl: './addmemory.component.html',
  styleUrls: ['./addmemory.component.css']
})
export class AddmemoryComponent implements OnInit {
  memoryId=""
  memory: MemoryItem;
  constructor(private route: ActivatedRoute, private service:MemoriesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.memoryId = params.get('id');
      this.loadMemoryDetail(this.memoryId)
    });
  }

  loadMemoryDetail(id) {
    this.service.getMemory(id)
    .subscribe(response =>{
      //console.log(response);
      this.memory = response;
    });
  }

  editMemory()
  {
    this.service.saveMemory(this.memory.id, this.memory)
    .subscribe(response =>{
      console.log(response);
      this.memory = response;
    });
  }

}
