import { Component, OnInit } from '@angular/core';
import { MemoriesService } from '../services/memories.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewmemory',
  templateUrl: './viewmemory.component.html',
  styleUrls: ['./viewmemory.component.css']
})
export class ViewmemoryComponent implements OnInit {

  memory: any;
  constructor(private service:MemoriesService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(routeParams => {
      this.loadMemoryDetail(routeParams.id);
    });
  }

  loadMemoryDetail(id) {
    this.service.getMemory(id)
    .subscribe(response =>{
      console.log(response);
      this.memory = response;
    });
  }

}
