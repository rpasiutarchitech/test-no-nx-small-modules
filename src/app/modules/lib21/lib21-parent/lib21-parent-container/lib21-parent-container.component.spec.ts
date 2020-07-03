import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib21ParentContainerComponent } from './lib21-parent-container.component';

describe('Lib21ParentContainerComponent', () => {
  let component: Lib21ParentContainerComponent;
  let fixture: ComponentFixture<Lib21ParentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib21ParentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib21ParentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
