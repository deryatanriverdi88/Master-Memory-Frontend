import React from 'react'
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { Formik } from 'formik'
import {useDispatch} from "react-redux"
import userActions from "../redux/actions/userActions"

const SignUpForm = ({navigation}) => {
    const dispatch = useDispatch()
    return (
        <View>
        <Formik
        initialValues={{name: "",
                        age: "",
                        username: "",
                        email: "",
                        password: ""}}
        onSubmit={(values) => {
            dispatch(userActions.newUserToDB(values))
            navigation.navigate('Home')
        }}>
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
                // autoCapitalize='false'
                onChangeText={handleChange("username")}/>
                <Text style={styles.label}>Email:</Text>
                <TextInput
                style={styles.input}
                value={values.email}
                // autoCapitalize={false}
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
        <Button
        onPress={() => navigation.navigate("Login")}
        title="Do you have an Account? Login here!" />
    </View>
    )
}

export default SignUpForm


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
