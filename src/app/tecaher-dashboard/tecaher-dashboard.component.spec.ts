import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecaherDashboardComponent } from './tecaher-dashboard.component';

describe('TecaherDashboardComponent', () => {
  let component: TecaherDashboardComponent;
  let fixture: ComponentFixture<TecaherDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TecaherDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TecaherDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
