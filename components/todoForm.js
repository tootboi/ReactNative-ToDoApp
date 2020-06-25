import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState('');

    const handleChange = (newTodo) => {
        setTodo(newTodo);
    }
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='new todo'
                onChangeText={handleChange}
            />
            <Button onPress={() => addTodo(todo)} title='add todo' color='coral'/>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    }
})