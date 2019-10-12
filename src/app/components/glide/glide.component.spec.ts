import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlideComponent } from './glide.component';

describe('GlideComponent', () => {
  let component: GlideComponent;
  let fixture: ComponentFixture<GlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
