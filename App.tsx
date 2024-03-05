import React,{useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Navigation from './src/navigation/Navigation';

function App(): React.JSX.Element {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);
 
  return (
     <>
     <Navigation/>
     </>
  );
}
export default App;
