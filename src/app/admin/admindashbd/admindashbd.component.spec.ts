import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindashbdComponent } from './admindashbd.component';

describe('AdmindashbdComponent', () => {
  let component: AdmindashbdComponent;
  let fixture: ComponentFixture<AdmindashbdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmindashbdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmindashbdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
