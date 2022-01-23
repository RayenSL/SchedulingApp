// @ts-nocheck
import {SectionList, StatusBar, View, Text, TouchableOpacity} from "react-native";
import {ScheduleEvent} from "../models/Types";
import {StyleSheet} from 'react-native';
import * as events from "events";
import React from "react";
import {FlightEvent} from "./scheduleEvents/FlightEvent";
import {DayOffEvent} from "./scheduleEvents/DayOffEvent";
import {StandbyEvent} from "./scheduleEvents/StandbyEvent";
import {LayOverEvent} from "./scheduleEvents/LayOverEvent";
import {PositioningEvent} from "./scheduleEvents/PositioningEvent";
import {DebriefEvent} from "./scheduleEvents/DebriefEvent";
import {TrainingEvent} from "./scheduleEvents/TrainingEvent";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    list: {
        width: "100%"
    },
    header: {
        backgroundColor: "#f1f1f1",
        height: 35,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderBottomColor: "#d8d8d8",
        borderTopColor: "#d8d8d8",
    },
    headerTitle: {
        fontSize: 15,
        marginLeft: 10,
        marginTop: 7,
        color: "#000000"
    },
    item: {
        backgroundColor: "#FFFFFF",
        padding: 20,
    },
});

interface Props {
    scheduledEvents: ScheduleEvent[]
    loadData: () => void
    isLoading: boolean
    navigation: any
}


export const RosterListComponent = (props: Props) => {

    const dataShaper = (events: ScheduleEvent[]) => {
        // Create empty array
        const shapedData = []
        // Reduce array to the required format for the sectionList
        const reducedObjects = events.reduce((acc: ScheduleEvent, item: ScheduleEvent) => {
            if (acc[item.Date] === undefined) {
                acc[item.Date] = {title: item.Date, data: []}
            }

            acc[item.Date].data.push(item)
            return acc
        }, {})

        // Push the objects in the array
        for (var i in reducedObjects) {
            shapedData.push(reducedObjects[i])
        }

        return shapedData
    }

    const sortScheduleEvents = (event: ScheduleEvent) => {
        // Missing Schedule event Codes: Training, Debrief and Report events,
        // Unknown Schedule event code : Positioning event
        switch (event.DutyID) {
            case "FLT":
                return <FlightEvent scheduleEvent={event}/>
            case "DO":
                return <DayOffEvent scheduleEvent={event}/>
            case "POS":
                return <PositioningEvent scheduleEvent={event}/>
            case "SBY":
                return <StandbyEvent scheduleEvent={event}/>
            case "OFD":
                return <LayOverEvent scheduleEvent={event}/>
            // TODO Declare right name for TrainingEvent
            case "SIM":
                return <TrainingEvent scheduleEvent={event}/>
            // TODO Declare right name for DebriefEvent, for now its default
            default:
                return <DebriefEvent scheduleEvent={event}/>
        }

    }

    const renderHeader = ({section}) => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{section.title}</Text>
            </View>
        )
    }
    return (

        <SectionList
            style={styles.list}
            onRefresh={props.loadData}
            sections={dataShaper(props.scheduledEvents)}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => {
                return (
                    <TouchableOpacity onPress={() => props.navigation.navigate("Detail", {item: item})}>
                        {sortScheduleEvents(item)}
                    </TouchableOpacity>
                )
            }}
            refreshing={props.isLoading}
            renderSectionHeader={renderHeader}
        />
    )
}
