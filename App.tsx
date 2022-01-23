import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';

import useCachedResources from './src/app/hooks/useCachedResources';
import useColorScheme from './src/app/hooks/useColorScheme';
import Navigation from './src/app/navigation';
import {store} from "./src/app/store/ReduxStore";
import {NetworkProvider} from "react-native-offline";

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <Provider store={store}>
                <NetworkProvider>
                    <Navigation colorScheme={colorScheme}/>
                    <StatusBar/>
                </NetworkProvider>
            </Provider>
        );
    }
}
