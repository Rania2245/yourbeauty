import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourbeautyComponent } from './yourbeauty.component';

describe('YourbeautyComponent', () => {
  let component: YourbeautyComponent;
  let fixture: ComponentFixture<YourbeautyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourbeautyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourbeautyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
