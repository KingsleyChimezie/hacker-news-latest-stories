import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Story } from '../../interfaces/hacker-news/stories.interface';
import * as HNConsts from '../../constants/hacker-news.constants'
import { Observable, forkJoin } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class StoriesService {

  stories$: Observable<Story[]>; // store stories, after restrieving with stored Items

  constructor(private http: HttpClient) { }

  // Get new Stories (500 is the max by HN)
  getHnNewStories$(load: number): Observable<Story[]> {

    // set the URL for New Stories, orded by key (latest first)
    const URL_NEWSTORIES = `${HNConsts.HN_URL}${HNConsts.HN_NEWSTORIES}.json?orderBy=\"$key\"&limitToFirst=${load}`;

    // return data from GET request to HN API.
    this.stories$ = this.http.get(URL_NEWSTORIES)
    .pipe(
      mergeMap((ids: number[]) =>
        forkJoin(
          ids.map((id) =>
            // get item of the id
            this.http.get<Story>(`${HNConsts.HN_URL}/item/${id}.json`)
          )
        )
      )
    );
    return this.stories$;
  }
}
