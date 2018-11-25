import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmemoryComponent } from './viewmemory.component';

describe('ViewmemoryComponent', () => {
  let component: ViewmemoryComponent;
  let fixture: ComponentFixture<ViewmemoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmemoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
