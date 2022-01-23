import {StyleSheet} from 'react-native';
import {View} from '../components/Themed';
import {RootHomeScreenProps} from '../../../types';
import React, {useEffect} from "react";
import {getAllDutiesFromRoster} from "../api/BackendService";
import {ScheduleEvent} from "../models/Types";
import {RosterListComponent} from "../components/RosterListComponent";
import {useIsConnected} from "react-native-offline";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default function HomeScreen({navigation}: RootHomeScreenProps<'Home'>) {
    const isConnected = useIsConnected();

    const [scheduledEvents, setScheduledEvent] = React.useState([] as ScheduleEvent[])
    const [isLoading, setIsLoading] = React.useState(false);

    const loadData = () => {
        setIsLoading(true)
        getAllDutiesFromRoster().then(data => setScheduledEvent(data))
        setIsLoading(false)
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <View style={styles.container}>
            {
                scheduledEvents.length > 0 ?
                    <RosterListComponent navigation={navigation} isLoading={isLoading} loadData={loadData}
                                         scheduledEvents={scheduledEvents}/>
                    :
                    null
            }
        </View>
    );
}
