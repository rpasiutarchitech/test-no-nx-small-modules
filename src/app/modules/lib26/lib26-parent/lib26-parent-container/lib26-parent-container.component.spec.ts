import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib26ParentContainerComponent } from './lib26-parent-container.component';

describe('Lib26ParentContainerComponent', () => {
  let component: Lib26ParentContainerComponent;
  let fixture: ComponentFixture<Lib26ParentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib26ParentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib26ParentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
