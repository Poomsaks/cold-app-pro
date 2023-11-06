import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-page-pro',
  templateUrl: './logout-page-pro.component.html',
  styleUrls: ['./logout-page-pro.component.css']
})
export class LogoutPageProComponent {
  constructor(private router: Router) {
    // ลบสถานะการล็อกอินและเปลี่ยนเส้นทางไปยังหน้า Login
    localStorage.removeItem('loggedIn');
    this.router.navigate(['/app-login-page-pro']);
  }
}
