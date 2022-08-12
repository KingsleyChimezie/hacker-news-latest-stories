import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { StoriesService } from '../../core/services/hn-api/stories.service';
import { Story } from '../../core/interfaces/hacker-news/stories.interface';
import * as HNConsts from '../../core/constants/hacker-news.constants'

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
    numberOfStoriesToLoad: HNConsts.HN_NUMBER_OF_STORIES_TO_LOAD
  }

  // loading
  loading = true;
  localStorageName = 'localStorageHN';

  constructor(
    private primengConfig: PrimeNGConfig,
    private storiesService: StoriesService
  ) {
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    // if local storage data exist
    if(this.getLocalStorage() != null) {
      this.localStorageHN = this.getLocalStorage()
      console.log(this.localStorageHN)
    }

    this.getNewStories();
  }

  getNewStories() {
    // get newest stories from HN API
    this.storiesService.getHnNewStories$(this.localStorageHN.numberOfStoriesToLoad).subscribe(data => {
      this.loading = false;
      this.stories = data;
    })
  }

  // function to dynamically set URL target when a title is clicked, i.e. open in the same or another window.
  setOpenStoriesInNewTab() {
    if(this.localStorageHN.openStoriesInNewTab === true) {
      this.urlTarget = '_blank'
      this.setLocalStorage()
    } else {
      this.urlTarget = '_self'
      this.setLocalStorage()
    }
  }


  /* save "Open stories in new tab" checkbox selection variable to local storage.
  * Allows ability to remember selection when browser is reloaded. */
 setLocalStorage(): void {
   console.log("setting local storage")
   localStorage.setItem(this.localStorageName, JSON.stringify(this.localStorageHN))
  }
  getLocalStorage() {
    let data: any = localStorage.getItem(this.localStorageName)
    this.session = JSON.parse(data);
    return this.session
  }

}
