import { createApp } from 'vue'
import { initializeApp } from 'firebase/app';
import App from './App.vue'
import router from './router'
import firebase from 'firebase/compat/app';
const app = createApp(App)

const firebaseConfig = {
    apiKey: "AIzaSyAe1L9if4OgYSn4zp2NhPCbf84W0D10xh0",
    authDomain: "lugat-cb16d.firebaseapp.com",
    projectId: "lugat-cb16d",
    storageBucket: "lugat-cb16d.appspot.com",
    messagingSenderId: "771049232401",
    appId: "1:771049232401:web:644a13c4fc3877011179b0",
    measurementId: "G-ZHWH4D54FE"
};

  firebase.initializeApp(firebaseConfig);

app.use(router)

app.mount('#app')
