import { useTheme } from 'styled-components';
import { View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { AppRoutes } from './app.routes';

export function Routes(){
  const { COLORS } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY_600}}>
      <NavigationContainer>
        <AppRoutes/>
      </NavigationContainer>
    </View>
  );
}