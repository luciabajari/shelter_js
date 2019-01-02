import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerPostComponent } from './owner-post.component';

describe('OwnerPostComponent', () => {
  let component: OwnerPostComponent;
  let fixture: ComponentFixture<OwnerPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
