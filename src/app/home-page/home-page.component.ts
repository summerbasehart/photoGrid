import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PhotoService } from '../photo.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  query: any = <any>{};
  photoUrls: string[] = [];
  page: number = 1;
  constructor(
    private photoService: PhotoService
  ) { }
  ngOnInit() {
    this.getPhotos();
  }
  getPhotos() {
    this.photoService.randomPhotos(this.page)
      .subscribe(res => {
        this.photoUrls = this.photoUrls.concat((res as any).photos.map(p => p.src.landscape));
      })
  }
  searchPhotos(searchForm: NgForm) {
    if (searchForm.invalid) {
      return;
    }
    this.page = 1;
    this.photoUrls = [];
    this.requestSearchPhotos();
  }
  requestSearchPhotos() {
    this.photoService.searchPhotos(this.query.search, this.page)
      .subscribe(res => {
        this.photoUrls = this.photoUrls.concat((res as any).photos.map(p => p.src.landscape));
      })
  }
  onScroll() {
    this.page++
    if (!this.query.search) {
      this.getPhotos();
    }
    else {
      this.requestSearchPhotos();
    }
  }
}
