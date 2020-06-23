import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import Flag from './Flag'

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.flagContainer}>
                <TouchableOpacity onPress={props.onFlagPress}
                    style={styles.flagButton}>
                        <Flag bigger />
                        <Text style={styles.flagsLeft}>= {props.flagsLeft}</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button}
                onPress={props.onNewGame}>
                    <Text style={styles.buttonLabel}>Novo Jogo</Text>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 30,
        paddingHorizontal: 20,
    },
    flagContainer: {
        flexDirection: 'row',
    },
    flagButton: {
        marginTop: 15,
        minWidth: 30,
    },
    flagsLeft: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 40,
    },
    button: {
        marginTop: 10,
        backgroundColor: '#999',
        padding: 5,
    },
    buttonLabel: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold',
    }
})