import {ScheduleEvent} from "../../models/Types";
import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faMapSigns} from "@fortawesome/free-solid-svg-icons";

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
    headerText: {
        fontWeight: "bold",
        marginTop: 5,
        marginLeft: 20,
        fontSize: 20
    },
    footerEndText: {
        position: "absolute",
        color: "#c75d5d",
        top: 40,
        right: 20,
        fontSize: 13,
    }
})

export const PositioningEvent = (props: Props) => {
    console.log(props)
    return (
        <View style={styles.container}>
            <FontAwesomeIcon style={styles.icon} icon={faMapSigns} size={40}/>
            <Text style={styles.headerText}>{props.scheduleEvent.Departure} - {props.scheduleEvent.Destination}</Text>
            <Text style={styles.footerEndText}>{props.scheduleEvent.Time_Depart} - {props.scheduleEvent.Time_Arrive}</Text>
        </View>
    )
}
