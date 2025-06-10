import { AppRegistry, LogBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// Opcional: Ignora warnings específicos do React Native
LogBox.ignoreLogs([
  'Warning: ...', // substitua por mensagens que deseja ocultar
]);

// Registro do componente principal do app
AppRegistry.registerComponent(appName, () => App);
