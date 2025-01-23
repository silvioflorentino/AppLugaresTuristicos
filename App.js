import{SafeAreaView,Text,StyleSheet,Image, ScrollView} from 'react-native';

export default function App(){
  return(
  <SafeAreaView style={estilo.container}>
     <Text style={estilo.titulo}> Cidades Para Conhecer </Text>
     <Text style={estilo.frase}> O Mundo Espera por Você: Cidades para Desbravar </Text>
     <ScrollView>
    <Text style={estilo.tituloPais}>Paris - França</Text>
    <Image style={estilo.img} source={require('./assets/eiffel-tower-975004_640.jpg')}/> 

<Text style={estilo.tituloPais}>Istanbul</Text>
    <Image style={estilo.img} source={require('./assets/istanbul-1094402_640.jpg')}/>

    <Text style={estilo.tituloPais}>Japão</Text>
    <Image style={estilo.img} source={require('./assets/japan-2799034_640.jpg')}/>

    <Text style={estilo.tituloPais}>Nova York</Text>
    <Image style={estilo.img} source={require('./assets/new-york-4352072_640.jpg')}/>

    <Text style={estilo.tituloPais}>Roma</Text>
    <Image style={estilo.img} source={require('./assets/rome-3550739_640.jpg')}/>

    </ScrollView>
  </SafeAreaView>
  )
}

const estilo = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:'center',
    backgroundColor:'#00BFFF',
    justifyContent:'center'
  },
  titulo:{
    fontSize: 30,
    color:'#fff',
    marginTop:50,
    marginBottom:40
  },
  frase:{
    fontSize:20,
    color: '#fff',
  },
  tituloPais:{
    fontSize:15,
    color: '#fff',
    marginTop:20
  },
  img:{
    width: '350',
    height: '250'
  }
})