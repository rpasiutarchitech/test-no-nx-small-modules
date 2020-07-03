import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib17ParentContainerComponent } from './lib17-parent-container.component';

describe('Lib17ParentContainerComponent', () => {
  let component: Lib17ParentContainerComponent;
  let fixture: ComponentFixture<Lib17ParentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib17ParentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib17ParentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
