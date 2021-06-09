import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(
    private http: HttpClient
  ) { }
  randomPhotos(page: number = 1) {
    return this.http.get(`https://api.pexels.com/v1/curated?per_page=15&page=${page}`)
  }
  searchPhotos(query: string, page: number = 1) {
    return this.http.get(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=15&page=${page}`)
  }
}