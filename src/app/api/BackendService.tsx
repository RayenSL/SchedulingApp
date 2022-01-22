import statusCodes from "http-status-codes";
import dutyData from "../utils/helpers/example-duty-data.json"
import axios from "axios";
import {ScheduleEvent} from "../models/Types";

const baseUrl = "https://www.rosterbuster.aero"

export const getAllDutiesFromRoster = (): ScheduleEvent[] => {
    const headers = new Headers({
        Accept: "*/*",
    });

    // try {
    //     axios.get(`${baseUrl}/wp-content/uploads/dummy-response.json`)
    //         .then(x => console.log("then", x))
    //         .catch(x => console.log("catch", x))
    // }

    try {
        fetch(`${baseUrl}/wp-content/uploads/dummy-response.json`, {
            method: "GET",
            headers,
        })
        // .then(x => console.log("then", x))
        // .catch(x => console.log("catch", x))
    } catch (e) {
        console.log(e)
    }
    const mockData = dutyData as ScheduleEvent[]
    return dutyData

}
