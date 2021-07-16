import React from 'react'
import { SafeAreaView, Text,View,StyleSheet,StatusBar,Platform } from 'react-native'

export default class DailyPicScreen extends React.Component {

    render(){

        return(
            <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea}>
            <View>
                style={{
                    flex:1,
                    justifyContent:"center",
                    alignItems:"center"
                }}
                <Text style={styles.routeText}>Daily Pic Screen</Text>
            </View>
            </SafeAreaView>

            </View>
            )
        }   
}

const styles=StyleSheet.create({
    container:{
        flex: 1
    },
    droidSafeArea:{
        marginTop: Platform.OS==='android' ? StatusBar.currentHeight :0
    },
    routeText:{
        fontWeight: 'bold',
        color: 'black',
        marginTop: 75,
        paddingTop: 30,
        fontSize: 35
    }

})