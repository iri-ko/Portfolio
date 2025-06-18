import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactfaultComponent } from './contactfault.component';

describe('ContactfaultComponent', () => {
  let component: ContactfaultComponent;
  let fixture: ComponentFixture<ContactfaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactfaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactfaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
