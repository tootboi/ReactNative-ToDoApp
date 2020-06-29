import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function TodoItem({ item, deleteTodo }) {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.item}>
                <Text>{item.text}</Text>
                <Entypo name='cross' size={18} color='#929292' style={styles.itemIcon} onPress={() => deleteTodo(item.id)}/>
            </View> 
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        flexDirection: 'row',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10,
    },
    itemIcon: {
        position: 'absolute',
        right: 0,
        top: 16,
        width: 30,
        height: 30
    }
})