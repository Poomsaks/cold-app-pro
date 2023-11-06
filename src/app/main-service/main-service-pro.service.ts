import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainServiceProService {
  private databaseName = "DiabetsBandung";
  constructor(private http: HttpClient) { }

  authenticate(): Observable<any> {
    return this.http.post<any>("/web/session/authenticate", {
      params: {
        login: 'admin',
        password: '1234',
        db: 'DiabetsBandung'
      }
    }, { withCredentials: true });
  }

  per_diabets_bandung(applicationData: any): Observable<any> {
    const payload = {
      params: {
        db: this.databaseName,
        age: applicationData.age,
        weight: applicationData.weight,
        height: applicationData.height,
        bpd: applicationData.bpd,
        bps: applicationData.bps,
        fever: applicationData.fever,
        cough: applicationData.cough,
        sore_throat: applicationData.sore_throat,
        phlegm: applicationData.phlegm,
        headache: applicationData.headache,
        covid: applicationData.covid,
        vomit: applicationData.vomit,
        feverish: applicationData.feverish,
      }
    };
    return this.http.post<any>("/api/per_Tree_full", payload);
  }
  insert_data(applicationData: any): Observable<any> {
    const payload = {
      params: {
        db: this.databaseName,
        name: applicationData.name,
        phone: applicationData.phone,
        email: applicationData.email,
        age: applicationData.age,
        weight: applicationData.weight,
        height: applicationData.height,
        bpd: applicationData.bpd,
        bps: applicationData.bps,
        fever: applicationData.fever,
        cough: applicationData.cough,
        sore_throat: applicationData.sore_throat,
        phlegm: applicationData.phlegm,
        headache: applicationData.headache,
        covid: applicationData.covid,
        vomit: applicationData.vomit,
        feverish: applicationData.feverish,
        class_per: applicationData.class_per,
      }
    };
    return this.http.post<any>("/api/insert_data", payload);
  }
  get_profile(): Observable<any> {
    const payload = {
      params: {
        db: this.databaseName
      }
    };
    return this.http.post<any>("/api/get_profile", payload);
  }
  get_data_admin(): Observable<any> {
    const payload = {
      params: {
        db: this.databaseName
      }
    };
    return this.http.post<any>("/api/get_data_admin", payload);
  }

}
