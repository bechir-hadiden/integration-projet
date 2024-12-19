import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposNousComponent } from './propos-nous.component';

describe('ProposNousComponent', () => {
  let component: ProposNousComponent;
  let fixture: ComponentFixture<ProposNousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProposNousComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProposNousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
