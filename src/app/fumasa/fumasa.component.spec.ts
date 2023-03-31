import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FumasaComponent } from './fumasa.component';

describe('FumasaComponent', () => {
  let component: FumasaComponent;
  let fixture: ComponentFixture<FumasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FumasaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FumasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
