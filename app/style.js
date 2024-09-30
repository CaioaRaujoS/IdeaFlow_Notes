import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'gray',
        padding:2
    },
    
    fundo:{
        position:'absolute',
        height:'100%'
    },

    logo:{
        position:'absolute',
        top:-40,
        left:2,
    
    },

    areaLogin:{
        position:'absolute',
        top:200
        
    },

    email:{
        height: 50,
        padding:12,
        fontWeight: 'bold',
        top: 150,
        backgroundColor: 'white',
        width:'90%',
        borderRadius:10,
        borderWidth:1,
        width:380,
        marginBottom:70,
        top:100
    },

    senha:{
        padding:10,        
        height: 50,
        padding:12,
        fontWeight: 'bold',
        top: 150,
        backgroundColor: 'white',
        width:'90%',
        borderRadius:10,
        borderWidth:1,
        width:380,
        top:10,
        marginBottom:20,
        top:100
    },

    esqueceu:{
        top:90,
        fontWeight:'bold'
    },

    line:{
        width:140,
        height:2,
        backgroundColor:'black'
    },
    login:{
        top:130,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#B3B3B3',
        height:60,
        borderRadius:30,
    },
    criar:{
        top:180,
        alignItems:'center'
    }


})



export default styles