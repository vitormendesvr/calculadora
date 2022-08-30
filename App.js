import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import A from './telalogin';
import calc from './calculadora';

export default function App() {
  return (
    <div class="card">
    <form action="" method="post">
      <label for="number">Numero1: </label>
        <input type="number" name="num1"></input>
      <label for="number">Numero2: </label>  
        <input type="number" name="num2"></input>
    <button>+</button>
    <button>-</button>
    <button>*</button>
    <button>/</button>
    
    </form>
    </div>
  );
}




