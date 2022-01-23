import {StyleSheet, Text} from 'react-native';
import {View} from '../components/Themed';
import {ScheduleEvent} from "../models/Types";
import React from "react";
import {
    faChartLine,
    faCheckDouble,
    faHome,
    faMapSigns,
    faPaste,
    faPlane,
    faSuitcase
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";

export default function DetailScreen(props: any) {
    const [event, setEvent] = React.useState(props.route.params.item as ScheduleEvent)
    let icon;
    let description;

    const sortScheduleEvents = (event: ScheduleEvent) => {
        // Missing Schedule event Codes: Training, Debrief and Report events,
        // Unknown Schedule event code : Positioning event
        switch (event.DutyID) {
            case "FLT":
                icon = <FontAwesomeIcon style={styles.icon} icon={faPlane} size={50}/>
                description = "Flight from Departure Airport to Arrival Airport"
                break
            case "DO":
                icon = <FontAwesomeIcon style={styles.icon} icon={faHome} size={50}/>
                description = "Not scheduled to work"
                break
            case "POS":
                icon = <FontAwesomeIcon style={styles.icon} icon={faMapSigns} size={50}/>
                description = "Rebase location to another Airport"
                break
            case "SBY":
                icon = <FontAwesomeIcon style={styles.icon} icon={faPaste} size={50}/>
                description = "On reserve duty. Can be called by the airline any time."
                break
            case "OFD":
                icon = <FontAwesomeIcon style={styles.icon} icon={faSuitcase} size={50}/>
                description = "When you sleep at a Arrival Airport and fly out later."
                break
            // TODO Declare right name for TrainingEvent
            case "SIM":
                icon = <FontAwesomeIcon style={styles.icon} icon={faChartLine} size={50}/>
                description = "Training Course"
                break
            // TODO Declare right name for DebriefEvent, for now its default
            default:
                icon = <FontAwesomeIcon style={styles.icon} icon={faCheckDouble} size={50}/>
                description = "End for a day of working. "
                break
        }
    }

    sortScheduleEvents(event)

    const contentKeyValues = (key: string, value: string) =>
        <View style={styles.contentView}>
            <View style={styles.subHeaderKey}>
                <Text style={{fontSize: 25, fontWeight: "bold"}}>
                    {key}
                </Text>
            </View>
            <View style={styles.subHeaderValue}>
                <Text style={{fontSize: 25}}>
                    {value}
                </Text>
            </View>
        </View>

    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                {icon}
                <Text style={styles.title}>{event.DutyCode}</Text>
            </View>

            <View style={styles.contentView}>
                <View style={styles.subContentView}>
                    <Text style={{fontSize: 40}}>
                        {event.Departure}
                    </Text>
                    <Text style={{fontSize: 20}}>
                        {event.Time_Depart}
                    </Text>
                </View>
                <View style={styles.subContentView}>
                    <Text style={{fontSize: 40}}>
                        {event.Destination}
                    </Text>
                    <Text style={{fontSize: 20}}>
                        {event.Time_Arrive}
                    </Text>
                </View>
            </View>
            <View style={styles.greyBox}>
                <Text style={{fontSize: 30}}>{event.Date}</Text>
            </View>

            {event.Captain ? contentKeyValues("Captain", event.Captain) : null}
            {event["First Officer"] ? contentKeyValues("First Officer", event["First Officer"]) : null}
            {event["Flight Attendant"] ? contentKeyValues("Flight Attendant", event["Flight Attendant"]) : null}
            {event["Aircraft Type"] ? contentKeyValues("Captain", event["Aircraft Type"]) : null}
            {event.Tail ? contentKeyValues("Tail", event.Tail) : null}

            <View style={styles.informationView}>
                <Text>
                    {description}
                </Text>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    title: {
        position: "absolute",
        right: "0%",
        top: "20%",
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    icon: {
        marginRight: 100
    },
    headerView: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderBottomWidth: 1,
        borderBottomColor: "#d8d8d8",
    },
    contentView: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        backgroundColor: "#FFFFFF",
    },
    greyBox: {
        backgroundColor: "#d8d8d8", borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    subContentView: {
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: "50%",
        backgroundColor: "#FFFFFF",
    },
    subHeaderKey: {
        borderWidth: 1,
        width: "40%",
        backgroundColor: "#FFFFFF",
    },
    subHeaderValue: {
        borderWidth: 1,
        width: "60%",
        backgroundColor: "#FFFFFF",
    },
    informationView: {
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        backgroundColor: "#FFFFFF",
    }
});
