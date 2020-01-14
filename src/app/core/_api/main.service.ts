import { Injectable } from "@angular/core";
import { of } from "rxjs/observable/of";
import { MapAndCatchHandler } from "./mapCatch";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class Main {
  constructor(private map: MapAndCatchHandler, private http: HttpClient) {}

  getSampleRequestFromAPI() {
    const apiRequest = this.http.get(`url`);
    return this.map.mapAndCatch(apiRequest);
  }

  getSampleRequestFromMock() {
    const apiRequest = ["Daily", "Weekly", "Monthly", "Auto"];
    return of(apiRequest);
  }
}
