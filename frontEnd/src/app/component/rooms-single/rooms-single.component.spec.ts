import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsSingleComponent } from './rooms-single.component';

describe('RoomsSingleComponent', () => {
  let component: RoomsSingleComponent;
  let fixture: ComponentFixture<RoomsSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomsSingleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomsSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
