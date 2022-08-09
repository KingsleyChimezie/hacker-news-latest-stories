import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoriesService } from './../../core/services/hn-api/stories.service';

import { HnNewstoriesComponent } from './hn-newstories.component';

describe('HnNewstoriesComponent', () => {
  let component: HnNewstoriesComponent;
  let fixture: ComponentFixture<HnNewstoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HnNewstoriesComponent ],
      imports: [HttpClientTestingModule],
      providers: [StoriesService]
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
