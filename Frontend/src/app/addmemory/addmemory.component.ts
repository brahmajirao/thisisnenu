import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { MemoriesService } from '../services/memories.service';

@Component({
  selector: 'app-addmemory',
  templateUrl: './addmemory.component.html',
  styleUrls: ['./addmemory.component.css']
})
export class AddmemoryComponent implements OnInit {
  memoryId = ""
  constructor(private route: ActivatedRoute, private service:MemoriesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.memoryId = params.get('id');
    });
  }

}
