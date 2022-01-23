import {StyleSheet} from 'react-native';
import {View} from '../components/Themed';
import {RootHomeScreenProps} from '../../../types';
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

export default function HomeScreen({navigation}: RootHomeScreenProps<'Home'>) {
    const [scheduledEvents, setScheduledEvent] = React.useState([] as ScheduleEvent[])
    const [isLoading, setIsLoading] = React.useState(false);

    const loadData = () => {
        setIsLoading(true)
        setScheduledEvent(getAllDutiesFromRoster())
        setIsLoading(false)
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <View style={styles.container}>
            <RosterListComponent navigation={navigation} isLoading={isLoading} loadData={loadData}
                                 scheduledEvents={scheduledEvents}/>
        </View>

    );
}
