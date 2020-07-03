import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib19ParentContainerComponent } from './lib19-parent-container.component';

describe('Lib19ParentContainerComponent', () => {
  let component: Lib19ParentContainerComponent;
  let fixture: ComponentFixture<Lib19ParentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib19ParentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib19ParentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
