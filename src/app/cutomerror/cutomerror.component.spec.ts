import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomerrorComponent } from './cutomerror.component';

describe('CutomerrorComponent', () => {
  let component: CutomerrorComponent;
  let fixture: ComponentFixture<CutomerrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CutomerrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutomerrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
