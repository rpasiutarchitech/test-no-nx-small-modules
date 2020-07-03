import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib13ParentContainerComponent } from './lib13-parent-container.component';

describe('Lib13ParentContainerComponent', () => {
  let component: Lib13ParentContainerComponent;
  let fixture: ComponentFixture<Lib13ParentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib13ParentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib13ParentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
