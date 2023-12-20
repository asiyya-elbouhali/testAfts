import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogmemberComponent } from './dialogmember.component';

describe('DialogmemberComponent', () => {
  let component: DialogmemberComponent;
  let fixture: ComponentFixture<DialogmemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogmemberComponent]
    });
    fixture = TestBed.createComponent(DialogmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
