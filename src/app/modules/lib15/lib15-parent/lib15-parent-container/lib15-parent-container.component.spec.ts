import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib15ParentContainerComponent } from './lib15-parent-container.component';

describe('Lib15ParentContainerComponent', () => {
  let component: Lib15ParentContainerComponent;
  let fixture: ComponentFixture<Lib15ParentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib15ParentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib15ParentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
