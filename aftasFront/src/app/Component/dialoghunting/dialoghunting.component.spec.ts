import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialoghuntingComponent } from './dialoghunting.component';

describe('DialoghuntingComponent', () => {
  let component: DialoghuntingComponent;
  let fixture: ComponentFixture<DialoghuntingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialoghuntingComponent]
    });
    fixture = TestBed.createComponent(DialoghuntingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
