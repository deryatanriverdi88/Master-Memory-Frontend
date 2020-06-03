import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'

export default class SignUpForm extends Component {
    render() {
        return (
          <View style={styles.form}>
              <Text style={styles.label}>Name:</Text>
              <TextInput style={styles.input}/>
              <Text style={styles.label}>Age:</Text>
              <TextInput style={styles.input}/>
              <Text style={styles.label}>Username:</Text>
              <TextInput style={styles.input}/>
              <Text style={styles.label}>Email:</Text>
              <TextInput style={styles.input}/>
              <Text style={styles.label}>Password:</Text>
              <TextInput style={styles.input}/>
              <TouchableOpacity
                style={styles.button}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    input:{
        margin: 15,
        padding: 5,
        borderWidth: 1
    },
    form: {
        borderColor: "black",
        borderWidth: 1,
        paddingTop: 10,
        paddingBottom: 10
    },
    label: {
        marginLeft: 15
    },
    button:{
        borderWidth: 1,
        borderColor: "red",
        width: "30%",
        alignSelf: "center",
        borderRadius: 10
    },
    buttonText:{
        textAlign: "center"
    }

})
