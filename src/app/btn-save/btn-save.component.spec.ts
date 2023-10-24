import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSaveComponent } from './btn-save.component';

describe('BtnSaveComponent', () => {
  let component: BtnSaveComponent;
  let fixture: ComponentFixture<BtnSaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnSaveComponent]
    });
    fixture = TestBed.createComponent(BtnSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
