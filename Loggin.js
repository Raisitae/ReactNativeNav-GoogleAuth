import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {
  Button,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import React, {useState, useEffect} from 'react';

export default function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  GoogleSignin.configure({
    webClientId:
      '470671337170-3vtnbeq57lfsfqmjet2883pafrq8ds20.apps.googleusercontent.com',
    //!Important: Client->Oauth->Web client ID CLIENT TYPE 3
    offlineAccess: true,
  });

  async function onGoogleButtonPress() {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  const handleSignOut = () => {
    auth().signOut();
    GoogleSignin.signOut(); // User is now signed out and Google is ready for the next user.
  };

  //User confirms sign out
  const signOut = () => {
    Alert.alert(
      'Cerrar sesión',
      '¿Estás seguro de que quieres cerrar sesión?',
      [
        {
          text: 'Sí',
          onPress: () => handleSignOut(),
          style: 'cancel',
        },
        {
          text: 'No',
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  if (!user) {
    return (
      <SafeAreaView style={style.container}>
        <StatusBar barStyle="light-content" />
        <View style={{...style.container, justifyContent: 'space-evenly'}}>
          <View>
            <Text style={style.title}>Bienvenido</Text>
            <Text style={style.subtitle}>Todavía no nos conocemos</Text>
          </View>
          <Image
            source={{
              uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png',
            }}
            style={style.image}
          />
          <View>
            <Text style={style.text}>Para iniciar sesión haga click aquí</Text>
            <Button
              title="Inicir sesión"
              onPress={() => onGoogleButtonPress()}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={style.container}>
        <StatusBar barStyle="light-content" />
        <View style={{...style.container, justifyContent: 'space-evenly'}}>
          <View>
            <Text style={style.subtitle}>Bienvenido</Text>
            <Text style={style.title}>{user.displayName}</Text>
          </View>
          <Image style={style.image} source={{uri: user.photoURL}} />
          <View>
            <Text style={style.text}>Para cerrar sesión haga click aquí</Text>
            <Button title="Cerrar sesión" onPress={() => signOut()} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});
