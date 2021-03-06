import {ScheduleEvent} from "../../models/Types";
import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons';

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
        marginLeft: 20,
    },
    headerText: {
        fontWeight: "bold",
        marginTop: 5,
        marginLeft: 20,
        fontSize: 20
    }
})

export const DayOffEvent = (props: Props) => {

    return (
        <View style={styles.container}>
            <FontAwesomeIcon style={styles.icon} icon={faHome} size={40}/>
            <Text style={styles.headerText}>{props.scheduleEvent.Departure} - {props.scheduleEvent.Destination}</Text>
        </View>
    )
}
