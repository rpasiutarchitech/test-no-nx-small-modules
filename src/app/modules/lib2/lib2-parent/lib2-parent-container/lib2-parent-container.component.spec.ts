import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2ParentContainerComponent } from './lib2-parent-container.component';

describe('Lib2ParentContainerComponent', () => {
  let component: Lib2ParentContainerComponent;
  let fixture: ComponentFixture<Lib2ParentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib2ParentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2ParentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
