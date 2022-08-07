import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HnNewstoriesComponent } from './hn-newstories.component';

describe('HnNewstoriesComponent', () => {
  let component: HnNewstoriesComponent;
  let fixture: ComponentFixture<HnNewstoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HnNewstoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HnNewstoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
