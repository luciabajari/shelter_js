import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalByIdComponent } from './animal-by-id.component';

describe('AnimalByIdComponent', () => {
  let component: AnimalByIdComponent;
  let fixture: ComponentFixture<AnimalByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
