import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerPutComponent } from './owner-put.component';

describe('OwnerPutComponent', () => {
  let component: OwnerPutComponent;
  let fixture: ComponentFixture<OwnerPutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerPutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
