import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportXlsxComponent } from './import-xlsx.component';

describe('ImportXlsxComponent', () => {
  let component: ImportXlsxComponent;
  let fixture: ComponentFixture<ImportXlsxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportXlsxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportXlsxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
