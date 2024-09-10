import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableHighlight, TextInput} from 'react-native'
import styles from './style'
import { opacity } from 'react-native-reanimated/lib/typescript/reanimated2/Colors'

export default function App(){
    return(
        <View style={styles.container}>
            <Image
                source={require("./src/assets-imagens/fundo.png")}
                style={styles.fundo}
            />
            <Image
                source={require("./src/assets-imagens/logo.png")}
                style={styles.logo}
            />
            

            {/* Area de Login */}
            <View style={styles.areaLogin}>
                <Text style={{position:'absolute', fontSize:36, fontWeight:'bold', margin:20}}>Login</Text>

                {/* Email */}
                <Text style={{fontSize: 16,top:140,right:135,fontWeight:'bold'}}>E-mail:</Text>
                <TextInput
                    style={styles.email}
                    placeholder='Endereço de E-mail'
                    placeholderTextColor={'white'}
                />

                {/* Senha */}
                <Text style={{fontSize:16,fontWeight:'bold',right:135, top:170}}>Senha:</Text>
                <TextInput
                    style={styles.senha}
                    placeholder='Senha'
                    placeholderTextColor={'white'}
                    secureTextEntry={true}
                />
                <TouchableOpacity>
                    <Image
                        source={require("./src/assets-imagens/iconSenha.png")}
                        style={styles.icon}
                    />

                {/* Botão Criar Conta */}
                </TouchableOpacity>
                <TouchableOpacity style={styles.criarConta}>
                    <Text style={{fontWeight:'bold', fontSize:18}}>Criar conta</Text>
                </TouchableOpacity>
                {/* Botão Acessar */}
                <TouchableOpacity style={styles.acessar}>
                    <Text style={{fontWeight:'bold', fontSize:18}}>Acessar</Text>
                </TouchableOpacity>
                
                {/* Esqueceu a Senha */}
                <TouchableOpacity>
                    <Text style={styles.esqueceuSenha}>Esqueceu a senha?</Text>
                </TouchableOpacity>

                
            </View>
        </View>
        
     

        
    )
}

