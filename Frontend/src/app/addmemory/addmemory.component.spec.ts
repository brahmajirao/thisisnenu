import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmemoryComponent } from './addmemory.component';

describe('AddmemoryComponent', () => {
  let component: AddmemoryComponent;
  let fixture: ComponentFixture<AddmemoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmemoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
