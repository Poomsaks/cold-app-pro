import { Component } from '@angular/core';
import { MainServiceProService } from '../main-service/main-service-pro.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';

@Component({
  selector: 'app-page-home-pro',
  templateUrl: './page-home-pro.component.html',
  styleUrls: ['./page-home-pro.component.css']
})
export class PageHomeProComponent {
  isDropdownActive: boolean = false;
  toggleDropdown() {
    this.isDropdownActive = !this.isDropdownActive;
    console.log('asdw')
  }
}
