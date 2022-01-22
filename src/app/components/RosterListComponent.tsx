// @ts-nocheck
import {SectionList, StatusBar, View, Text} from "react-native";
import {ScheduleEvent} from "../models/Types";
import {StyleSheet} from 'react-native';
import * as events from "events";
import React from "react";

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
}

export const RosterListComponent = (props: Props) => {

    const dataShaper = (events: ScheduleEvent[]) => {
        const shapedData = []
        const reducedObjects = events.reduce((acc: ScheduleEvent, item: ScheduleEvent) => {
            if (acc[item.Date] === undefined) {
                acc[item.Date] = {title: item.Date, data: []}
            }

            acc[item.Date].data.push(item)
            return acc
        }, {})

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
                break
            case "DO":
                break
            case "POS":
                break
            case "SBY":
                break
            case "OFD":
                break

        }

    }

    const renderHeader = ({section}) => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{section.title}</Text>
            </View>
        )
    }

    const Item = ({title}) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );

    return (
        <SectionList
            style={styles.list}
            sections={dataShaper(props.scheduledEvents)}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => <Item title={item.Flightnr}/>}
            renderSectionHeader={renderHeader}
        />
    )
}
