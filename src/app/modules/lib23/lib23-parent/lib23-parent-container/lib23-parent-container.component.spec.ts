import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib23ParentContainerComponent } from './lib23-parent-container.component';

describe('Lib23ParentContainerComponent', () => {
  let component: Lib23ParentContainerComponent;
  let fixture: ComponentFixture<Lib23ParentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib23ParentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib23ParentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
