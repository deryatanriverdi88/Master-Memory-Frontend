import React from 'react'
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import { useDispatch } from 'react-redux'
import userActions from '../redux/actions/userActions'

const LoginForm = ({navigation}) => {
    const dispatch = useDispatch()
    return (
        <View>
            <Formik
            initialValues={{username:'', password:''}}
            onSubmit = {(values) => {
            dispatch(userActions.loginUserToDB(values, navigation))
            }}>
              {({handleChange, handleSubmit, values})=> (
                <View style={styles.form}>
                    <Text style={styles.label}>Username:</Text>
                    <TextInput
                        style={styles.input}
                        value={values.username}
                        onChangeText={handleChange('username')}
                    />
                    <Text style={styles.label}>Password:</Text>
                    <TextInput
                        style={styles.input}
                        value={values.password}
                        onChangeText={handleChange('password')}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
              )}
            </Formik>
            <Button
            onPress={() => navigate("Sign Up")}
            title="Dont have an Account? Sign up here!" />
        </View>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    input: {
          margin: 15,
          padding: 5,
          borderWidth: 1
    },
    form: {
        borderColor: 'black',
        borderWidth: 1,
        paddingTop: 10,
        paddingBottom: 10
    },
    label: {
        marginLeft: 5
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