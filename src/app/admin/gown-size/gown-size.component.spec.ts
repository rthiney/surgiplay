/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GownSizeComponent } from './gown-size.component';

describe('GownSizeComponent', () => {
  let component: GownSizeComponent;
  let fixture: ComponentFixture<GownSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GownSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GownSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
