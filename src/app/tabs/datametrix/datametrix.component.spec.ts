import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatametrixComponent } from './datametrix.component';

describe('DatametrixComponent', () => {
  let component: DatametrixComponent;
  let fixture: ComponentFixture<DatametrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatametrixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatametrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
