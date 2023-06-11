import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  Pressable,
  Image,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const initialState = {
  login: '',
  email: '',
  password: '',
};

export default function RegistrationScreen() {
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const [isEmailFocus, setIsEmailFocus] = useState(false);
  const [isPasswordFocus, setIsPasswordFocus] = useState(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    keyboardHide();
    console.log(state);
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' && 'padding'}>
          <View style={styles.container}>
            <Image source={require('../assets/images/photo-bg.jpg')} style={styles.image} />
            <View style={styles.formWrap}>
              <Text style={styles.title}>Увійти</Text>

              <View style={styles.inputWrap}>
                <TextInput
                  value={state.email}
                  onChangeText={value => setState(prevState => ({ ...prevState, email: value }))}
                  placeholder="Адреса електронної пошти"
                  placeholderTextColor={'#BDBDBD'}
                  style={{
                    ...styles.input,
                    borderColor: isEmailFocus ? '#ff6c00' : '#e8e8e8',
                    backgroundColor: isEmailFocus ? '#fff' : '#f6f6f6',
                    marginBottom: 16,
                  }}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                    setIsEmailFocus(true);
                  }}
                  onBlur={() => setIsEmailFocus(false)}
                />
                <View style={{ position: 'relative' }}>
                  <TextInput
                    value={state.password}
                    onChangeText={value =>
                      setState(prevState => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                    placeholder="Пароль"
                    placeholderTextColor={'#BDBDBD'}
                    secureTextEntry={isPasswordHidden}
                    style={{
                      ...styles.input,
                      borderColor: isPasswordFocus ? '#ff6c00' : '#e8e8e8',
                      backgroundColor: isPasswordFocus ? '#fff' : '#f6f6f6',
                    }}
                    onFocus={() => {
                      setIsShowKeyboard(true);
                      setIsPasswordFocus(true);
                    }}
                    onBlur={() => setIsPasswordFocus(false)}
                  />
                  <Pressable
                    onPress={() => setIsPasswordHidden(prevState => !prevState)}
                    style={styles.toggleButton}
                  >
                    <Text style={styles.toggleText}>
                      {isPasswordHidden ? 'Показати' : 'Сховати'}
                    </Text>
                  </Pressable>
                </View>
              </View>

              {!isShowKeyboard && (
                <View>
                  <Pressable onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Увійти</Text>
                  </Pressable>
                  <Text style={styles.logInText}>Немає акаунту? Зареєструватися</Text>
                </View>
              )}
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
    width: '100%',
  },
  formWrap: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 32,
  },
  title: {
    marginBottom: 33,

    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
    color: '#212121',
    fontSize: 30,
    fontWeight: '500',
    lineHeight: 35,
    letterSpacing: 1.6,
  },
  inputWrap: {
    flexDirection: 'column',
    gap: 16,
    marginBottom: 43,
  },
  image: {
    position: 'absolute',
    width: '100%',
    top: 0,
  },
  input: {
    height: 45,
    padding: 15,
    borderWidth: 1,
    borderRadius: 8,
    fontFamily: 'Roboto-Regular',
  },
  button: {
    height: 51,
    backgroundColor: '#FF6C00',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginBottom: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 16,
    fontFamily: 'Roboto-Regular',
  },
  logInText: {
    textAlign: 'center',
    color: '#1B4371',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19,
    fontFamily: 'Roboto-Regular',
    marginBottom: 144,
  },
  toggleButton: {
    position: 'absolute',
    top: 12,
    right: 20,
  },
  toggleText: {
    color: '#1B4371',
    fontFamily: 'Roboto-Regular',
    lineHeight: 19,
  },
});
