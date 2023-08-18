import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

//'https://api.openweathermap.org/data/2.5/weather?q=Genebra&units=metric&APPID=143454aa39bbe3442a890cdbf3f9db36'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tempo: '',
    };
  }

  componentDidMount() {
    this.pegarTempo();
  }

  pegarTempo = async () => {
    var link = 'https://api.openweathermap.org/data/2.5/weather?q=Inglaterra&units=metric&APPID=143454aa39bbe3442a890cdbf3f9db36';
    return fetch(link)
    .then(resposta=>resposta.json())
    .then(respostaJson=>this.setState({tempo:respostaJson}))
    .catch(erro=>console.log(erro))
  };

  render() {
    if (this.state.tempo == '') {
      return (
        <View style={styles.container}>
          <Text style={styles.paragraph}>Carregando...</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <Text style={styles.title}>
            Previsão do Tempo
            </Text>

            <Image source={require("./nuvens.png")}
              style={styles.imagem}
            />

            <View style={styles.textContainer}>
              <Text style={styles.text}>Place: {this.state.tempo.name} </Text>
              <Text style={styles.text}>Weather: {this.state.tempo.weather[0].description} </Text>
              <Text style={styles.text}>Temperature: {this.state.tempo.main.temp} </Text>
              <Text style={styles.text}>Minimum temperature: {this.state.tempo.main.temp_min} </Text>
              <Text style={styles.text}>Maximum temperature: {this.state.tempo.main.temp_max} </Text>
              <Text style={styles.text}>Feels like: {this.state.tempo.main.feels_like} </Text>

            </View>



          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    borderWidth: 1,
    alignItems: 'center',
  },
  title: {
    marginTop: 50,
    fontSize: 30,
    fontWeight: '550',
  },
  imagem: {
    width: 150,
    height: 150,
    marginTop: 30,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 15,
  },
  text:{
    fontSize:20,
    }
});
