import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedproduitComponent } from './selectedproduit.component';

describe('SelectedproduitComponent', () => {
  let component: SelectedproduitComponent;
  let fixture: ComponentFixture<SelectedproduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedproduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
