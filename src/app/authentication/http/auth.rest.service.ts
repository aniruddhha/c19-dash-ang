import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResMsg } from "src/app/http/res.domain";
import { AppUser } from "../domain/app.user";
import { map, catchError } from 'rxjs/operators';
import { AuthUrls } from "./auth.urls";

@Injectable()
export class AuthRestService {

    constructor(
        private http: HttpClient
    ) { }

    signUp(appUser: AppUser): Observable<AppUser> {
        return this.http.post<ResMsg<AppUser>>(AuthUrls.signUp, appUser)
            .pipe(
                map(res => res.payload)
            )
    }

    signIn(userName: string, password: string): Observable<AppUser> {
        return this.http.post<ResMsg<AppUser>>(AuthUrls.signIn, { userName, password })
            .pipe(
                map(res => res.payload)
            )
    }
}