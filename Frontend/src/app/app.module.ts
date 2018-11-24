import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router'
import { MemoriesComponent } from './memories/memories.component';
import { HttpClientModule } from '@angular/common/http';
import { AddmemoryComponent } from './addmemory/addmemory.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    MemoriesComponent,
    AddmemoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'memories', component:MemoriesComponent},
      {path:'memories/new', component:AddmemoryComponent},
      {path:'memories/edit/:id', component:AddmemoryComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }