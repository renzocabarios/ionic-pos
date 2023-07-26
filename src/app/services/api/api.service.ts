import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  async get<T>(url: string) {
    const temp: HttpResponse = await CapacitorHttp.get({
      url: `${environment.url}${url}`,
      headers: { 'Content-Type': 'application/json' },
    });
    const parsed = temp.data.data as T[];
    return parsed;
  }

  async post(url: string, data: any) {
    return await CapacitorHttp.post({
      url: `${environment.url}${url}`,
      headers: { 'Content-Type': 'application/json' },
      data,
    });
  }

  async patch<T>(url: string, data: T) {
    return await CapacitorHttp.patch({
      url: `${environment.url}${url}`,
      data,
    });
  }

  async delete(url: string) {
    const temp = await CapacitorHttp.delete({
      url: `${environment.url}${url}`,
      headers: { 'Content-Type': 'application/json' },
    });

    console.log(temp);

    return temp;
  }
}
