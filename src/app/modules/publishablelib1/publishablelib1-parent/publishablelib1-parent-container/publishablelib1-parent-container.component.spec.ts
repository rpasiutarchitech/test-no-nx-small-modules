import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Publishablelib1ParentContainerComponent } from './publishablelib1-parent-container.component';

describe('Publishablelib1ParentContainerComponent', () => {
  let component: Publishablelib1ParentContainerComponent;
  let fixture: ComponentFixture<Publishablelib1ParentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Publishablelib1ParentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Publishablelib1ParentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
