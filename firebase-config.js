// Firebase settings for Learn Mode.
//
// 1. Create a Firebase project and register a Web app.
// 2. Copy the firebaseConfig object Firebase gives you into `config` below.
// 3. Change enabled to true.
//
// The Firebase web config is NOT a password/secret.
// Your Firestore Security Rules are what protect your data.
//
// Optional: after your first Google sign-in, the app shows your Firebase UID.
// Paste it into ownerUid to make the UI reject any other Google account.

window.LEARN_FIREBASE = {
  enabled: false,

  ownerUid: "",

  config: {
    apiKey: "PASTE_API_KEY_HERE",
    authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
    projectId: "PASTE_PROJECT_ID",
    storageBucket: "PASTE_PROJECT_ID.firebasestorage.app",
    messagingSenderId: "PASTE_MESSAGING_SENDER_ID",
    appId: "PASTE_APP_ID"
  }
};
