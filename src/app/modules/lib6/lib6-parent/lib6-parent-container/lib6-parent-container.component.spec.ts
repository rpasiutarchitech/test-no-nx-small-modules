import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib6ParentContainerComponent } from './lib6-parent-container.component';

describe('Lib6ParentContainerComponent', () => {
  let component: Lib6ParentContainerComponent;
  let fixture: ComponentFixture<Lib6ParentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib6ParentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib6ParentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
