/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GloveSizeComponent } from './glove-size.component';

describe('GloveSizeComponent', () => {
  let component: GloveSizeComponent;
  let fixture: ComponentFixture<GloveSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GloveSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GloveSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
