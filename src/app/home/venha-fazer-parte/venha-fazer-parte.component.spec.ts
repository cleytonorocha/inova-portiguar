import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenhaFazerParteComponent } from './venha-fazer-parte.component';

describe('VenhaFazerParteComponent', () => {
  let component: VenhaFazerParteComponent;
  let fixture: ComponentFixture<VenhaFazerParteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenhaFazerParteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VenhaFazerParteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
