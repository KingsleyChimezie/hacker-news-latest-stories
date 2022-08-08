import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Story } from '../../interfaces/hacker-news/stories.interface';
import * as HNConsts from '../../constants/hacker-news.constants'

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  items: any;   // store items (ID number), I'll use it to retrieve stories
  stories: Array<Story> = []; // store stories, after restrieving with stored Items

  constructor(
    private http: HttpClient
  ) { }

  getNewStories() {
    // first getting item IDs
    this.items = this.http.get(`${HNConsts.HN_URL}${HNConsts.HN_NEWSTORIES}.json`);

    // TODO: get Stories with item IDs
    return this.items;
  }
}
