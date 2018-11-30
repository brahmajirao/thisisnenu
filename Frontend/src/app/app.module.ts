import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router'
import { MemoriesComponent } from './memories/memories.component';
import { HttpClientModule } from '@angular/common/http';
import { AddmemoryComponent } from './addmemory/addmemory.component';
import { ViewmemoryComponent } from './viewmemory/viewmemory.component';
import { CreateMemoryComponent } from './create-memory/create-memory.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    MemoriesComponent,
    AddmemoryComponent,
    ViewmemoryComponent,
    CreateMemoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'memories', component:MemoriesComponent},
      {path:'memories/new', component:AddmemoryComponent},
      {path:'memories/edit/:id', component:AddmemoryComponent},
      {path:'memories/view/:id', component:ViewmemoryComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
