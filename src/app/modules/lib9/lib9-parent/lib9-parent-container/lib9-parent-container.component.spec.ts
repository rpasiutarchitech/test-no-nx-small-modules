import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9ParentContainerComponent } from './lib9-parent-container.component';

describe('Lib9ParentContainerComponent', () => {
  let component: Lib9ParentContainerComponent;
  let fixture: ComponentFixture<Lib9ParentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib9ParentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9ParentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
