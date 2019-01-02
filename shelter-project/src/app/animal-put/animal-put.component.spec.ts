import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalPutComponent } from './animal-put.component';

describe('AnimalPutComponent', () => {
  let component: AnimalPutComponent;
  let fixture: ComponentFixture<AnimalPutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalPutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
