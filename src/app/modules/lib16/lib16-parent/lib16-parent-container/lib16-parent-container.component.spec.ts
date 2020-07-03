import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib16ParentContainerComponent } from './lib16-parent-container.component';

describe('Lib16ParentContainerComponent', () => {
  let component: Lib16ParentContainerComponent;
  let fixture: ComponentFixture<Lib16ParentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib16ParentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib16ParentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
