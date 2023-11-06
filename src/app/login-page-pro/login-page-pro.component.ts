import { Router } from '@angular/router';
import { Component } from '@angular/core';
@Component({
  selector: 'app-login-page-pro',
  templateUrl: './login-page-pro.component.html',
  styleUrls: ['./login-page-pro.component.css']
})
export class LoginPageProComponent{
  username!: string;
  password!: string;

  constructor(private router: Router) {}
  login() {
    if (this.username === 'admin' && this.password === '1234') {
      localStorage.setItem('loggedIn', 'true'); // ตั้งค่าสถานะการล็อกอิน
      this.router.navigate(['/app-admin-page-pro']); // เปลี่ยนเส้นทางไปยังหน้า Dashboard
    } else {
      alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
    }
  }
  main() {
    this.router.navigate(['/app-page-home-pro']); // เปลี่ยนเส้นทางไปยังหน้า Dashboard
  }


}
