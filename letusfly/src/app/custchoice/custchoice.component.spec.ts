import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustchoiceComponent } from './custchoice.component';

describe('CustchoiceComponent', () => {
  let component: CustchoiceComponent;
  let fixture: ComponentFixture<CustchoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustchoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustchoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
