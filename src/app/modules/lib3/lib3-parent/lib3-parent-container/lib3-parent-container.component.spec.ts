import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3ParentContainerComponent } from './lib3-parent-container.component';

describe('Lib3ParentContainerComponent', () => {
  let component: Lib3ParentContainerComponent;
  let fixture: ComponentFixture<Lib3ParentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib3ParentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3ParentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
