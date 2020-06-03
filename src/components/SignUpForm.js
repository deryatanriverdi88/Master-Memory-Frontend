import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'

export default class SignUpForm extends Component {
    render() {
        return (
            <Formik
             initialValues={{name: "",
                            age: "",
                            username: "",
                            email: "",
                            password: ""}}
             onSubmit={(values) => console.log('submitted', values)}>
                {({handleChange, handleSubmit, values}) => (
                 <View style={styles.form}>
                    <Text style={styles.label}>Name:</Text>
                    <TextInput
                    style={styles.input}
                    value={values.name}
                    onChangeText={handleChange("name")}/>
                    <Text style={styles.label}>Age:</Text>
                    <TextInput
                    style={styles.input}
                    value={values.age}
                    onChangeText={handleChange("age")}/>
                    <Text style={styles.label}>Username:</Text>
                    <TextInput
                    style={styles.input}
                    value={values.username}
                    onChangeText={handleChange("username")}/>
                    <Text style={styles.label}>Email:</Text>
                    <TextInput
                    style={styles.input}
                    value={values.email}
                    onChangeText={handleChange("email")}/>
                    <Text style={styles.label}>Password:</Text>
                    <TextInput
                    style={styles.input}
                    value={values.password}
                    onChangeText={handleChange("password")}
                    secureTextEntry={true}/>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleSubmit}>
                            <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                 </View>

                )}
            </Formik>
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
