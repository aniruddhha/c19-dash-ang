import { Pipe, PipeTransform } from "@angular/core";
import { Detail } from "./state.domain";

@Pipe({
    name: 'flSt'
})
export class StateFilter implements PipeTransform {
    transform(details: Array<Detail>, st: string): Array<Detail> {
        return details.filter(dt => dt.Province_State.toLowerCase().includes(st))
    }
}