import { Component, OnInit } from '@angular/core';
import { MemoriesService } from '../services/memories.service';

@Component({
  selector: 'app-memories',
  templateUrl: './memories.component.html',
  styleUrls: ['./memories.component.css']
})
export class MemoriesComponent implements OnInit {

  memories:any;
  constructor(private service: MemoriesService) { }

  ngOnInit(){
    this.service.getMemories()
    .subscribe(response =>{
      console.log(response);
      this.memories = response;
    });
  }
}
