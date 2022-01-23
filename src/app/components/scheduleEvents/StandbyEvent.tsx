import {ScheduleEvent} from "../../models/Types";
import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faPaste} from "@fortawesome/free-solid-svg-icons";

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
    }
})

export const StandbyEvent = (props: Props) => {

    return (
        <View style={styles.container}>
            <FontAwesomeIcon style={styles.icon} icon={faPaste} size={40}/>
            <View style={styles.header}>
                <Text
                    style={styles.headerText}>{props.scheduleEvent.Departure} - {props.scheduleEvent.Destination}</Text>
                <Text
                    style={styles.subHeaderText}
                >{props.scheduleEvent.DutyID} ({props.scheduleEvent.Destination})</Text>
            </View>
            <Text
                style={styles.footerEndText}>{props.scheduleEvent.Time_Depart.substr(0, 5)} - {props.scheduleEvent.Time_Arrive.substr(0, 5)}</Text>
        </View>
    )
}
