import { Http, Response} from '@angular/http';

import { Injectable } from '@angular/core';
import { IPhone } from '../interfaces/phone';

import { constants } from '../constants/app.constants';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const extractData = (res: Response) => {
    let body = res.json();
    return body|| { };
};

@Injectable()
export  class PhonesModel {
    private phones: Array<IPhone>;
    private apiUrl: string = constants.apiUrl + '/phones';

    constructor(private http: Http,) {
        console.log("Phone models init");
    }


    get():Observable<IPhone[]> {
        return this.http.get(this.apiUrl).map(extractData);
    }

    getOne(id:string):Observable<IPhone[]>{
        return this.http.get(`${this.apiUrl}/${id}`).map(extractData);
    }
}
