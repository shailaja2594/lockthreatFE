import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditDashboardComponent } from './audit-dashboard.component';

describe('AuditDashboardComponent', () => {
  let component: AuditDashboardComponent;
  let fixture: ComponentFixture<AuditDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
