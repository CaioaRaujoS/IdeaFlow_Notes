import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    },

    fundo:{
    width:"100%",
    height:"100%"
    },

    logo:{
        position: 'absolute',
        top:5,
        right:5
    },

    areaLogin:{
        position: 'absolute',
        alignItems: 'center',
        backgroundColor:'rgba(217, 217, 217, 0.7)',
        width:360,
        height:460,
        bottom:120,
        borderRadius:30,
        borderWidth:1.5
    },

    email:{
        height: 50,
        padding:12,
        fontWeight: 'bold',
        top: 150,
        backgroundColor: '#B3B3B3',
        width:'90%',
        borderRadius:10,
        borderWidth:1
    },

    icon:{
        top:146,
        left:140
    },

    senha:{
        height: 50,
        padding:12,
        fontWeight: 'bold',
        top: 180,
        backgroundColor: '#B3B3B3',
        width:'90%',
        borderRadius:10,
        borderWidth:1
    },
    criarConta:{
        justifyContent: 'center',
        alignItems: 'center',
        width:127,
        height:54,
        backgroundColor: '#B3B3B3',
        right:70,
        top:190,
        borderRadius:10,
        borderWidth:1
    },

    acessar:{
        justifyContent: 'center',
        alignItems: 'center',
        width:127,
        height:54,
        backgroundColor: '#B3B3B3',
        left:70,
        top:136,
        borderRadius:10,
        borderWidth:1
    },

    esqueceuSenha:{
        fontWeight:'bold',
        fontSize:12,
        borderBottomWidth:1,
        top:150
    }
})
export default styles