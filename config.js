const firebaseConfig = {
  apiKey: "AIzaSyDmOGy5uOoohiRmBT1pM-sDFNbiS4dRs4U",
  authDomain: "bulk-sms-project-v1.firebaseapp.com",
  projectId: "bulk-sms-project-v1",
  storageBucket: "bulk-sms-project-v1.appspot.com",
  messagingSenderId: "476062631099",
  appId: "1:476062631099:web:d58fddabee2534b9dd959e",
  measurementId: "G-M8PTS65FSH",
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
