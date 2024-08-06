import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import HomeScreen from './src/screens/HomeScreen'
import TryCodeScreen from './src/screens/TryCodeScreen'
import MainNavigator from './src/navigator/MainNavigator'

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <TryCodeScreen/> */}
      {/* <HomeScreen/> */}
      <MainNavigator/>
    </SafeAreaProvider>
  )
}

export default App