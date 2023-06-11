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
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState(false);

  const keyboardHide = () => {
    setIsKeyboardVisible(false);
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

              <View style={styles.inputWraper}>
                <TextInput
                  value={state.email}
                  onChangeText={value => setState(prevState => ({ ...prevState, email: value }))}
                  placeholder="Адреса електронної пошти"
                  placeholderTextColor={'#BDBDBD'}
                  style={{
                    ...styles.input,
                    borderColor: isEmailFocused ? '#ff6c00' : '#e8e8e8',
                    backgroundColor: isEmailFocused ? '#fff' : '#f6f6f6',
                    marginBottom: 16,
                  }}
                  onFocus={() => {
                    setIsKeyboardVisible(true);
                    setIsEmailFocused(true);
                  }}
                  onBlur={() => setIsEmailFocused(false)}
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
                      borderColor: isPasswordFocused ? '#ff6c00' : '#e8e8e8',
                      backgroundColor: isPasswordFocused ? '#fff' : '#f6f6f6',
                    }}
                    onFocus={() => {
                      setIsKeyboardVisible(true);
                      setIsPasswordFocus(true);
                    }}
                    onBlur={() => setIsPasswordFocused(false)}
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
    paddingHorizontal: 16,
    paddingTop: 32,

    width: '100%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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
  inputWrapper: {
    flexDirection: 'column',
    gap: 16,
    marginBottom: 43,
  },
  image: {
    position: 'absolute',
    top: 0,

    width: '100%',
  },
  input: {
    padding: 15,

    height: 45,
    fontFamily: 'Roboto-Regular',
    borderWidth: 1,
    borderRadius: 8,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,

    height: 51,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 16,
  },
  logInText: {
    marginBottom: 144,

    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    color: '#1B4371',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19,
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
