import { Injectable } from "@angular/core";
import { of } from "rxjs/observable/of";
import { MapAndCatchHandler } from "./mapCatch";
import { Http, Response, Headers, RequestOptions } from "@angular/http";

@Injectable({
  providedIn: "root"
})
export class Main {
  constructor(private map: MapAndCatchHandler,
  ) { }

  getXAxis() {
    // const apiRequest = this.http.get(``);
    // return this.map.mapAndCatch(apiRequest);
    const apiRequest = ["Daily", "Weekly", "Monthly", "Auto"];
    return of(apiRequest);
  }

  getJobNames() {
    // const apiRequest = this.http.get(``);
    // return this.map.mapAndCatch(apiRequest);
    const apiRequest = {
      Graph: "BufferGraph",
      supported_jobs: [
        "Blotter U",
        "Blotter Rfr U",
        "Proteus U",
        "Proteus Counterparty U",
        "Cash U",
        "Haircut U",
        "Blotter E",
        "Blotter Rfr E",
        "Cash E",
        "Proteus E",
        "Proteus Counterparty E"
      ]
    }
      ;
    return of(apiRequest);
  }
  getJobNamesRuntime() {
    // const apiRequest = this.http.get(``);
    // return this.map.mapAndCatch(apiRequest);
    const apiRequest = {
      Graph: "RuntimeGraph",
      supported_jobs: [
        "Cloud U",
        "Sybora U",
        "Proteus U",
        "2000-59 U",
        "2000-89 U",
        "PMA E",
        "Cloud E",
        "Sybora E",
        "Proteus E",
        "2000-59 E",
        "2000-89 E",
        "PMA E",
      ]
    };
    return of(apiRequest);
  }
  getJobNamesGantt() {
    // const apiRequest = this.http.get(``);
    // return this.map.mapAndCatch(apiRequest);
    const apiRequest = {
      Graph: "GanttChart",
      supported_jobs: [
        "NightCycle E",
        "NightCycle U",
        "PMA E",
        "PMA U",
        "ModelBox E",
        "ModelBox U"
      ]
    }

    return of(apiRequest);
  }
  getOtherJobsList() {
    // const apiRequest = this.http.get(``);
    // return this.map.mapAndCatch(apiRequest);
    const apiRequest = ["Start Time", "End Time"];
    return of(apiRequest);
  }
  getJobSource() {
    // const apiRequest = this.http.get(``);
    // return this.map.mapAndCatch(apiRequest);
    const apiRequest = ["pimco_oracle", "pimco_sybase", "autoasys"];
    return of(apiRequest);
  }
}
