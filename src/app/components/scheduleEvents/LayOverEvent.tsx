// @ts-nocheck
import {ScheduleEvent} from "../../models/Types";
import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faSuitcase} from "@fortawesome/free-solid-svg-icons";

interface Props {
    scheduleEvent: ScheduleEvent
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "#ffffff",
        height: 60,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderBottomColor: "#d8d8d8",
        borderTopColor: "#d8d8d8",
    },
    icon: {
        marginTop: 10,
        marginLeft: 15,
    },
    header: {
        flexDirection: "column",
        flexWrap: "wrap",
    },
    headerText: {
        fontWeight: "bold",
        marginTop: 5,
        marginLeft: 20,
        fontSize: 20
    },
    subHeaderText: {
        color: "#959595",
        marginTop: 5,
        marginLeft: 20,
        fontSize: 15
    },
    footerEndText: {
        position: "absolute",
        color: "#c75d5d",
        top: 40,
        right: 20,
        fontSize: 13,
    },
    footerEndSubText: {
        position: "absolute",
        color: "#959595",
        top: 10,
        right: 20,
        fontSize: 15
    }
})

export const LayOverEvent = (props: Props) => {

    const arrival = new Date(null, null, null,
        parseInt(props.scheduleEvent.Time_Arrive.substr(0, 2)),
        parseInt(props.scheduleEvent.Time_Arrive.substr(3, 2)))
    const depart = new Date(null, null, null,
        parseInt(props.scheduleEvent.Time_Depart.substr(0, 2)),
        parseInt(props.scheduleEvent.Time_Depart.substr(3, 2)))

    const dateDiff = new Date(arrival - depart).toUTCString().substr(17,5)

    return (
        <View style={styles.container}>
            <FontAwesomeIcon style={styles.icon} icon={faSuitcase} size={40}/>
            <View style={styles.header}>
                <Text
                    style={styles.headerText}>Layover</Text>
                <Text
                    style={styles.subHeaderText}
                >{props.scheduleEvent.Destination}</Text>
            </View>
            <Text style={styles.footerEndSubText}>Match Crew</Text>
            <Text
                style={styles.footerEndText}>{dateDiff} hours</Text>
        </View>
    )
}
