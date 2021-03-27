import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequestParams } from '../models/http-request-params';
import { SpacexResponse } from '../models/spacex-response';

@Injectable({
  providedIn: 'root'
})
export class SpacexDataService {

  constructor(private _http: HttpClient) { }

  /**
   * Get all the spaceX-programs data from the api call
   * according to the applied filters.
   *
   *  @param [httpRequestParams] Resquest parameters 
   * according to the filters applied for getting data.
   *  
  */

  getSpaceXData(httpRequestParams: HttpRequestParams): Observable<SpacexResponse[]> {
    let params: HttpParams = new HttpParams().append("limit", httpRequestParams.limit.toString())
    if (httpRequestParams.launch_success != undefined) {
      params = params.append("launch_success", httpRequestParams.launch_success.toString())
    }
    if (httpRequestParams.launch_year != undefined) {
      params = params.append("launch_year", httpRequestParams.launch_year)
    }
    if (httpRequestParams.land_success != undefined) {
      params = params.append("land_success", httpRequestParams.land_success.toString())
    }
    let url = "https://api.spacexdata.com/v3/launches";
    return this._http.get<SpacexResponse[]>(url, { params });
  }
}
