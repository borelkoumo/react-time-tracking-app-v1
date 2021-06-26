//import dayjs from 'dayjs' // ES 2015
// var dayjs = require('dayjs')
import { v4 as uuidv4 } from 'uuid'

class TimerHelper {
    constructor() {
    }

    static createTimer(projectId = null, title = '') {
        const obj = {
            id: uuidv4(),
            projectId: projectId,
            title: title,
            ellapsedTime: 0,
            created: new Date().getTime(),
            runningSince: 0
        }
        return obj;
    }

    static computeElapsedTime(timer) {
        let diff = timer.ellapsedTime
        if (timer.runningSince !== 0) {
            diff = timer.ellapsedTime + (new Date().getTime() - timer.runningSince)
        }
        console.log(diff)
        //Get hours from milliseconds
        const hours = diff / (1000 * 60 * 60);
        const absoluteHours = Math.floor(hours);
        const h = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;

        //Get remainder from hours and convert to minutes
        const minutes = (hours - absoluteHours) * 60;
        const absoluteMinutes = Math.floor(minutes);
        const m = absoluteMinutes > 9 ? absoluteMinutes : '0' + absoluteMinutes;

        //Get remainder from minutes and convert to seconds
        const seconds = (minutes - absoluteMinutes) * 60;
        const absoluteSeconds = Math.floor(seconds);
        const s = absoluteSeconds > 9 ? absoluteSeconds : '0' + absoluteSeconds;

        //Get remainder for seconds and convert to milliseconds
        const milliseconds = (seconds - absoluteSeconds) * 1000;
        const absoluteMilliSeconds = Math.floor(milliseconds);
        const ms = absoluteMilliSeconds > 99 ? absoluteMilliSeconds : '0' + absoluteMilliSeconds;

        // console.log(diff)
        // const result = h + ':' + m + ':' + s
        const result = `${h}:${m}:${s}:${ms}`
        return result;
    }

    static timeMillisToHMS(timeMillis) {
        //Get hours from milliseconds
        const hours = timeMillis / (1000 * 60 * 60);
        const absoluteHours = Math.floor(hours);
        const h = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;

        //Get remainder from hours and convert to minutes
        const minutes = (hours - absoluteHours) * 60;
        const absoluteMinutes = Math.floor(minutes);
        const m = absoluteMinutes > 9 ? absoluteMinutes : '0' + absoluteMinutes;

        //Get remainder from minutes and convert to seconds
        const seconds = (minutes - absoluteMinutes) * 60;
        const absoluteSeconds = Math.floor(seconds);
        const s = absoluteSeconds > 9 ? absoluteSeconds : '0' + absoluteSeconds;

        //Get remainder for seconds and convert to milliseconds
        const milliseconds = (seconds - absoluteSeconds) * 1000;
        const absoluteMilliSeconds = Math.floor(milliseconds);
        const ms = absoluteMilliSeconds > 99 ? absoluteMilliSeconds : '0' + absoluteMilliSeconds;

        // console.log(diff)
        // const result = h + ':' + m + ':' + s
        const result = `${h}:${m}:${s}:${ms}`
        // debugger
        return result;
    }
}

export default TimerHelper;