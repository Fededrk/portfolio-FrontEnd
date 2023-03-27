import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Profile } from 'src/app/components/models/Profile';
import { Skills } from 'src/app/components/models/Skills';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class GeneralService {
  constructor (
    private apiService: ApiService
  ) {}

  me(): Observable<Profile> {
    return this.apiService.get('/perfil')
        .pipe(map(data => data));
  }

  skills(): Observable<[Skills]> {
    return this.apiService.get('/skills')
        .pipe(map(data => data));
  }

  login(username: string, password: string): Observable<Profile> {
    return this.apiService.post("/login",
    {
      email: username, password: password
    }
    )
      .pipe(map(data => data));
  }

}