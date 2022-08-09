import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { StoriesService } from '../../core/services/hn-api/stories.service';
import { Story } from '../../core/interfaces/hacker-news/stories.interface';
@Component({
  selector: 'app-hn-newstories',
  templateUrl: './hn-newstories.component.html',
  styleUrls: ['./hn-newstories.component.scss']
})
export class HnNewstoriesComponent implements OnInit {

  // newest stories
  stories: Story[];

  // prime NG variables
  showSidebar;

  // open in self or blank with local storage
  checked: boolean = false;
  urlTarget = '_self'
  session: any
  localStorageHN = {
    openStoriesInNewTab: false,
    loadNumber: 15
  }

  // loading
  loading = true;

  constructor(
    private primengConfig: PrimeNGConfig,
    private storiesService: StoriesService
  ) {
    this.getNewStories();
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.setLocalStorage()
  }

  getNewStories() {
    // get newest stories from HN API
    this.storiesService.getHnNewStories$(this.localStorageHN.loadNumber).subscribe(data => {
      this.loading = false;
      this.stories = data;
    })
  }

  // function to dynamically set URL target when a title is clicked, i.e. open in the same or another window.
  setUrlTarget() {
    if(this.checked === true) {
      this.urlTarget = '_blank'
    } else {
      this.urlTarget = '_self'
    }
  }


  /* save "Open stories in new tab" checkbox selection variable to local storage.
  * Allows ability to remember selection when browser is reloaded. */
 setLocalStorage(): void {
   console.log("setting local storage")
   localStorage.setItem('localStorageHN', JSON.stringify(this.localStorageHN))
  }
  getLocalStorage() {
      let data: any = localStorage.getItem('localStorageHN')
      this.session = JSON.parse(data);
      return this.session.openStoriesInNewTab
  }

}
