/**
 * Created by IlyaLitvinov on 12.10.16.
 */
import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import {Observable} from "rxjs/Rx";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class PhoneService {
    private baseUrl = "http://localhost:4001/api/v1/phones";
    private i: number = 0;
    constructor(private http: Http) {
        console.log("Hello service");
    };

    fetchAll() {
        debugger;
        return this.http.get(this.baseUrl)
            .map((res: Response) => {
                debugger;
                return res.json();
            })
            .catch((error: any) => Observable.throw(error.message || "Server error"));
    }
    toCount() {
        return  this.i++;
    }
}