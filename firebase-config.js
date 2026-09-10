// Firebase settings for Learn Mode.
//
// This Firebase web config is safe to include in a public client-side app.
// Firestore Security Rules protect the actual data.

window.LEARN_FIREBASE = {
  enabled: true,

  // Leave blank for now. After your first successful Google sign-in,
  // Learn Mode will show your Firebase UID. You can paste it here later
  // if you want the app UI restricted to only your account.
  ownerUid: "",

  config: {
    apiKey: "AIzaSyBMFnWPeXsX5KlF2wZeDTpi3TV95LFDU2w",
    authDomain: "learn-mode-d65b5.firebaseapp.com",
    projectId: "learn-mode-d65b5",
    storageBucket: "learn-mode-d65b5.firebasestorage.app",
    messagingSenderId: "82822413730",
    appId: "1:82822413730:web:c73ac2a74f955b344706fb"
  }
};
