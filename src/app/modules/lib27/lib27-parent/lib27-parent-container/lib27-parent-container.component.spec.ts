import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib27ParentContainerComponent } from './lib27-parent-container.component';

describe('Lib27ParentContainerComponent', () => {
  let component: Lib27ParentContainerComponent;
  let fixture: ComponentFixture<Lib27ParentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib27ParentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib27ParentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
