import statusCodes from "http-status-codes";
import dutyData from "../utils/helpers/example-duty-data.json"
import axios from "axios";
import {ScheduleEvent} from "../models/Types";

const baseUrl = "https://www.rosterbuster.aero"

export const getAllDutiesFromRoster = (): Promise<ScheduleEvent[]> => {
    return axios.get(`${baseUrl}/wp-content/uploads/dummy-response.json`)
        .then((response) => {
            return response.data
        })
        .catch((error) => console.log(error))
}
