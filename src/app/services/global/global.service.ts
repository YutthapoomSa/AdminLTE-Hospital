import { Injectable } from '@angular/core';
import { RepCreateStatusValue, ResCreateStatusValue } from '../api-status-value/interface/api-status-value';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    public repCreateStatusValue: RepCreateStatusValue = null;
    public resCreateStatusValue: ResCreateStatusValue = null;

    private recordTime = '';
    private eatLastMeal = '';
    private timeEatLastMeal = '';

    constructor() {}

    setRecordTime(val: string) {
        this.recordTime = val;
    }
    setEatLastMeal(val: string) {
        this.eatLastMeal = val;
    }
    setTimeEatLastMeal(val: string) {
        this.timeEatLastMeal = val;
    }
    setResCreateStatusValue(data: ResCreateStatusValue) {
        this.resCreateStatusValue = data;
    }

    // ────────────────────────────────────────────────────────────────────────────────
    getResCreateStatusValue() {
        return this.resCreateStatusValue;
    }
    getRecordTime() {
        return this.recordTime;
    }
    getEatLastMeal() {
        return this.eatLastMeal;
    }
    getTimeEatLastMeal() {
        return this.timeEatLastMeal;
    }
}
