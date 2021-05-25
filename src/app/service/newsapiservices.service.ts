import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  //newsapiurl
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=8db278df14de4851b4235c5b97f7aa2e";

  //technewsapiurl
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=8db278df14de4851b4235c5b97f7aa2e";

  //businessApiUrl
  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=8db278df14de4851b4235c5b97f7aa2e";

  //topheading()
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }

  // techNews()
  techNews():Observable<any>
  {
    return this._http.get(this.techApiUrl);
  }

  //businessNews
  businessNews():Observable<any>
  {
    return this._http.get(this.businessApiUrl);
  }

}
