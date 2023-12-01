import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncosmComponent } from './syncosm.component';

describe('SyncosmComponent', () => {
  let component: SyncosmComponent;
  let fixture: ComponentFixture<SyncosmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyncosmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyncosmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
