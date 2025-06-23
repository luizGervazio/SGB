import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAutorModalComponent } from './add-autor-modal.component';

describe('AddAutorModalComponent', () => {
  let component: AddAutorModalComponent;
  let fixture: ComponentFixture<AddAutorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAutorModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAutorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
