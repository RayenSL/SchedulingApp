import {StyleSheet} from 'react-native';
import {View} from '../components/Themed';
import {RootTabScreenProps} from '../../../types';
import React, {useEffect} from "react";
import {getAllDutiesFromRoster} from "../api/BackendService";
import {ScheduleEvent} from "../models/Types";
import {RosterListComponent} from "../components/RosterListComponent";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default function HomeScreen({navigation}: RootTabScreenProps<'TabOne'>) {
    const [scheduledEvents, setScheduledEvent] = React.useState([] as ScheduleEvent[])

    useEffect(() => {
        setScheduledEvent(getAllDutiesFromRoster())
    }, [])

    return (
        <View style={styles.container}>
            {
                scheduledEvents.length > 0 ?
                    <RosterListComponent scheduledEvents={scheduledEvents}/>
                    :
                    null
            }
        </View>

    );
}
