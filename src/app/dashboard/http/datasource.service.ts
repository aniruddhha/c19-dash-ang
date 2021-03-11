import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Urls } from "src/app/http/urls";
import { StateDetail, Detail } from "../main/state.domain";

@Injectable()
export class DataSourceService {

    constructor(
        private http: HttpClient
    ) { }

    fetchStateWiseData(): Observable<Array<Detail>> {
        return this.http.get(
            Urls.dailyReport,
            { responseType: 'text' }
        ).pipe(map(res => {
            const arr: Array<Detail> = new Array()
            const lines = res.split('\n');
            const fields = lines[0].split(',');
            const indiaLines = lines.filter(ln => ln.includes(',India,'))

            indiaLines.forEach(inDt => {
                const fields = inDt.split(',');

                arr.push({
                    FIPS: fields[0],
                    Admin2: fields[1],
                    Province_State: fields[2],
                    Country_Region: fields[3],
                    Last_Update: new Date(fields[4]),
                    Lat: Number.parseFloat(fields[5]),
                    Long_: Number.parseFloat(fields[6]),
                    Confirmed: Number.parseFloat(fields[7]),
                    Deaths: Number.parseFloat(fields[8]),
                    Recovered: Number.parseFloat(fields[9]),
                    Active: Number.parseFloat(fields[10]),
                    Combined_Key: fields[11],
                    Incident_Rate: Number.parseFloat(fields[12]),
                    Case_Fatality_Ratio: Number.parseFloat(fields[13])
                })
            })

            return arr
        }))
    }

    fetchConfirmedCases() {
        this.http.get(Urls.confirmedTimeSeries, { responseType: 'text' })
            .subscribe(res => {
                const lines = res.split('\n');
                const heads = lines[0].split(',');
                const indiaLines = lines.filter(ln => ln.includes(',India,'))
                const indiaValues = indiaLines[0].split(',')

                const neededHeads = heads.splice(4, heads.length)

                const neededValues = indiaValues.splice(4, indiaValues.length)

                const result: { [key: string]: number } = {}
                neededHeads.forEach((key, i) => {
                    const date = new Date(key)
                    const month = date.toLocaleString('default', { month: 'short' });
                    const year = date.toLocaleString('default', { year: 'numeric' });
                    console.log(`${month}${year} -> ${neededValues[i]}`)

                    result[`${month}${year}`] = Number.parseInt(neededValues[i])
                })
                // console.log(result)
            })
    }
}