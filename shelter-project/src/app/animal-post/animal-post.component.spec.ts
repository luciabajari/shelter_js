import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalPostComponent } from './animal-post.component';

describe('AnimalPostComponent', () => {
  let component: AnimalPostComponent;
  let fixture: ComponentFixture<AnimalPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
