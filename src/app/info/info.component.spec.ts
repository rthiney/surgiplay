/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrefCardComponent } from './pref-card.component';

describe('PrefCardComponent', () => {
  let component: PrefCardComponent;
  let fixture: ComponentFixture<PrefCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrefCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
