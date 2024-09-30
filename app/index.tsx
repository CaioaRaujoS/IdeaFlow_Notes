import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableHighlight, TextInput} from 'react-native'
import styles from './style'
import { Stack } from 'expo-router'




export default function App() {
    return(
        <View style={styles.container}>
            {<Image
                source={require("./src/assets-imagens/fundo.png")}
                style={styles.fundo}
            /> }
            <Image
                source={require("./src/assets-imagens/logo.png")}
                style={styles.logo}
            />
            
            <View style={styles.areaLogin}>
                <Text style={{fontWeight:'bold',top:100}}>E-mail</Text>
                <TextInput
                    style={styles.email}
                    placeholder='E-mail'
                    placeholderTextColor={'#B3B3B3'}
                
                />

                <Text style={{fontWeight:'bold',top:100}}>Senha</Text>
                <TextInput
                    style={styles.senha}
                    placeholder='Senha'
                    placeholderTextColor={'#B3B3B3'}
                />        

                <TouchableOpacity style={styles.esqueceu}>
                    <Text style={{fontWeight:'bold'}}>Esqueceu a senha?</Text>
                    <View style={styles.line}/>
                </TouchableOpacity>     

                <TouchableOpacity style={styles.login}>
                    <Text style={{fontSize:18,color:'white'}}>Login</Text> 
                </TouchableOpacity> 

                <TouchableOpacity style={styles.criar}>
                    <Text style={{fontWeight:'bold'}}>Não tem conta? Crie a sua agora!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
