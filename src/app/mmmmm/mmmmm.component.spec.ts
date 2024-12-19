import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmmmmComponent } from './mmmmm.component';

describe('MmmmmComponent', () => {
  let component: MmmmmComponent;
  let fixture: ComponentFixture<MmmmmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MmmmmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MmmmmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
