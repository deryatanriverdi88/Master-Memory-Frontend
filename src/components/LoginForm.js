import React from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import { Formik } from 'formik'

const LoginForm = ({navigate}) => {
    return (
        <View>
            <Formik
            initialValues={{username:'', password:''}}
            onSubmit={(values) => console.log('submitted', values)}>
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
                    <Button
                        title="Submit"
                        onPress={handleSubmit}
                    />
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
        borderWidth: 1
    },
    label: {
        marginLeft: 5
    }
  })