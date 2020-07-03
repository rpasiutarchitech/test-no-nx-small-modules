import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib28ParentContainerComponent } from './lib28-parent-container.component';

describe('Lib28ParentContainerComponent', () => {
  let component: Lib28ParentContainerComponent;
  let fixture: ComponentFixture<Lib28ParentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib28ParentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib28ParentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
