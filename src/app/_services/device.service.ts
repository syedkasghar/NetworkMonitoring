import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../_models';

const baseUrl = `${environment.apiUrl}/devices`;

@Injectable({ providedIn: 'root' })
export class DeviceService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<User[]>(baseUrl);
  }

  getById(id: string) {
    return this.http.get<User>(`${baseUrl}/${id}`);
  }

  create(params) {
    return this.http.post(baseUrl, params);
  }

  update(id: string, params) {
    return this.http.put(`${baseUrl}/${id}`, params);
  }

  delete(id: string) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
