import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MainServiceProService } from '../main-service/main-service-pro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diagnose-page-pro',
  templateUrl: './diagnose-page-pro.component.html',
  styleUrls: ['./diagnose-page-pro.component.css']
})
export class DiagnosePageProComponent implements OnInit{

  showContent: boolean = false;
  fullName!: string;
  fullNameResult!: string;
  phoneNumberResult!: string;
  phoneNumber!: string;
  email!: string;
  bpd!: string;
  bpdResult!: string;
  bps!: string;
  bpsResult!: string;

  age: number = 50; // ค่าเริ่มต้นสำหรับอายุ
  weight: number = 50; // ค่าเริ่มต้นสำหรับน้ำหนัก
  height: number = 50; // ค่าเริ่มต้นสำหรับส่วนสูง

  fever: number = 0;
  cough: number = 0;
  sore_throat: number = 0;
  phlegm: number = 0;
  headache: number = 0;
  vomit: number = 0;
  covid: number = 0;

  feverish: number | null = null;
  feverish_lv1: number = 36.5;
  feverish_lv2: number = 37.5;
  feverish_lv3: number = 38.5;
  responseValue: any;
  responseValue_2 : any;
  constructor(
    private _serviceService: MainServiceProService,
    private http:HttpClient,
    private router: Router
    ) { }
  batsman = []
  ngOnInit(): void {
    this._serviceService.authenticate().subscribe((response: any) => {
      console.log(response.result);
    });

  }

  updateFeverish(value: number | null) {
    this.feverish = value;
  }
  calculateRisk() {
    this.showContent = !this.showContent
    if (!this.fullName) {
      this.fullNameResult = 'กรุณากรอก ชื่อ-นามสกุล';
      return;
    }
    if (!this.phoneNumber) {
      this.phoneNumberResult = 'กรุณากรอก เบอร์โทร';
      return;
    }
    if (!this.bpd) {
      this.bpdResult = 'กรุณากรอก ความดันตัวบน';
      return;
    }
    if (!this.bps) {
      this.bpsResult = 'กรุณากรอก ความดันตัวล่าง';
      return;
    }

    if (this.fever) {
      this.fever = 1
    }
    if (this.cough) {
      this.cough = 1
    }
    if (this.sore_throat) {
      this.sore_throat = 1
    }
    if (this.phlegm) {
      this.phlegm = 1
    }
    if (this.headache) {
      this.headache = 1
    }
    if (this.vomit) {
      this.vomit = 1
    }
    if (this.covid) {
      this.covid = 1
    }

    if (this.fullName && this.phoneNumber && this.email && this.bpd && this.bps) {

      console.log('value : ',
        this.fullName,
        this.phoneNumber,
        this.email,
        this.fever,
        this.cough,
        this.sore_throat,
        this.phlegm,
        this.headache,
        this.covid,
        this.age,
        this.weight, this.height, this.feverish)

        const applicationData = {
          age:this.age,
          weight:this.weight,
          height:this.height,
          bpd:this.bpd,
          bps:this.bps,
          fever:this.fever,
          cough:this.cough,
          sore_throat:this.sore_throat,
          phlegm:this.phlegm,
          headache:this.headache,
          covid:this.covid,
          vomit:this.vomit,
          feverish:this.feverish,

        }
        this._serviceService.per_diabets_bandung(applicationData).subscribe((response: any) => {
          // console.log(response.result);
          const jsonString = response.result;
          // แปลงข้อมูล JSON จากสตริงเป็นอ็อบเจกต์
          const jsonData = JSON.parse(jsonString);
          const responseData = jsonData.response;
          this.responseValue = responseData;
          this.responseValue_2  = responseData;
          // console.log(responseData);
          const installData = {
            name:this.fullName,
            phone:this.phoneNumber,
            email:this.email,
            age:String(this.age),
            weight:String(this.weight),
            height:String(this.height),
            bpd:String(this.bpd),
            bps:String(this.bps),
            fever:String(this.fever),
            cough:String(this.cough),
            sore_throat:String(this.sore_throat),
            phlegm:String(this.phlegm),
            headache:String(this.headache),
            covid:String(this.covid),
            vomit:String(this.vomit),
            feverish:String(this.feverish),
            class_per:this.responseValue,
          }
          this._serviceService.insert_data(installData).subscribe((response: any) => {
            console.log(response.result);
          });
        });



    }
  }
  goToReport() {
    const applicationData = {
      name:this.fullName,
      phone:this.phoneNumber,
      age:this.age,
      weight:this.weight,
      height:this.height,
      bpd:this.bpd,
      bps:this.bps,
      fever:this.fever,
      cough:this.cough,
      sore_throat:this.sore_throat,
      phlegm:this.phlegm,
      headache:this.headache,
      covid:this.covid,
      vomit:this.vomit,
      feverish:this.feverish,
      responseValue:this.responseValue,
      responseValue_2:this.responseValue_2,
    }
    const applicationDataString = JSON.stringify(applicationData);
    this.router.navigate(['/app-report-page-pro'], { queryParams: { data: applicationDataString } });
  }
}
