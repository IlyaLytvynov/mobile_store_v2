/**
 * Created by IlyaLitvinov on 29.11.16.
 */
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Observable } from "rxjs";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class PhoneModel {
    private data: any;

    constructor(private http: Http) {
    }

    private fetchData(): Observable<Response> {
        return this.http.get("http://localhost:4001/api/v1/phones").map((res: Response) => res.json());
    }

    public getData(): any {
        return this.fetchData();
    }
}