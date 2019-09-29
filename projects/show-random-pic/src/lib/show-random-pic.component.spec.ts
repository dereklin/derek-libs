import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRandomPicComponent } from './show-random-pic.component';

describe('ShowRandomPicComponent', () => {
  let component: ShowRandomPicComponent;
  let fixture: ComponentFixture<ShowRandomPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRandomPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRandomPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
