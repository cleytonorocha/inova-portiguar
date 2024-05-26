import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InovarPotiguarComponent } from './inovar-potiguar.component';

describe('InovarPotiguarComponent', () => {
  let component: InovarPotiguarComponent;
  let fixture: ComponentFixture<InovarPotiguarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InovarPotiguarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InovarPotiguarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
