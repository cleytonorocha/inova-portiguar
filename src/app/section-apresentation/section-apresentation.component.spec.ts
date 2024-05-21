import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionApresentationComponent } from './section-apresentation.component';

describe('SectionApresentationComponent', () => {
  let component: SectionApresentationComponent;
  let fixture: ComponentFixture<SectionApresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionApresentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionApresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
