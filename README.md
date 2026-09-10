# Learn Mode — Multi-set + Firebase Sync

A lightweight static Learn Mode clone for GitHub Pages.

## Features

- Multiple saved flashcard sets
- New → Still Learning → Almost Done → Mastered workflow
- New cards first, then Still Learning, then Almost Done
- Random selection inside each priority group
- Wrong cards return at the end of the current round
- Almost Done uses written response
- Once everything is Mastered, cards stay Mastered and the app continues with randomized written review
- Browser-local autosave
- Optional Google sign-in + Firestore sync across devices
- Automatic migration from the older single-set version

## Files

- `index.html` — the entire app
- `firebase-config.js` — paste your Firebase web configuration here
- `firestore.rules` — normal private-per-user rules
- `firestore-owner-only.rules` — optional stricter one-user rules

## Import format

One card per line:

```text
Compromise of 1850	A package of laws...
Popular sovereignty	The idea that settlers...
```

`term :: definition` also works.

## Local saving

The app saves immediately to the browser's `localStorage`.

That means:
- closing/reopening the browser keeps your sets and progress;
- it works even when Firebase is not configured;
- clearing site data can remove the local copy.

When Firebase sync is enabled, localStorage stays as the fast local copy and Firestore is the cross-device copy.

## Firebase setup

### 1. Create the project

Create a Firebase project, then register a **Web** app.

Firebase will show you a `firebaseConfig` object.

### 2. Configure this app

Open `firebase-config.js`, paste the values Firebase gave you into the `config` object, then change:

```js
enabled: false
```

to:

```js
enabled: true
```

### 3. Enable Google sign-in

In Firebase Console:

**Security → Authentication → Sign-in method → Google → Enable**

### 4. Add your GitHub Pages domain

In Firebase Authentication settings, add your GitHub Pages host to **Authorized domains**.

Example:

```text
yourusername.github.io
```

Do not include `https://` or the repository path.

### 5. Create Firestore

Create a Cloud Firestore database.

Then open **Firestore Database → Rules** and replace the rules with the contents of `firestore.rules`.

Publish the rules.

### 6. Upload to GitHub Pages

Put these files together in the root of your GitHub Pages repository:

```text
index.html
firebase-config.js
```

The `.rules` files do not need to be served by the website. They are only provided so you can copy them into the Firebase console.

### 7. Sign in and sync

Open the site and press **Cloud → Sign in with Google**.

The first sync merges your browser copy and Firestore copy. For each set, the newest saved version wins.

After that:
- answers save immediately in localStorage;
- cloud writes are briefly debounced;
- another signed-in device receives newer Firestore changes;
- deleting a set while online deletes it from Firestore too.

## Optional: make the database usable by literally only your account

The normal `firestore.rules` already prevents anyone from reading anyone else's data.

If you want to prevent other people from using their own separate account on your public site too:

1. Sign in once.
2. Open **Cloud** and copy the Firebase UID shown there.
3. Open `firestore-owner-only.rules`.
4. Replace `PASTE_YOUR_FIREBASE_UID`.
5. Paste those rules into Firestore and publish.
6. Put the same UID in `ownerUid` inside `firebase-config.js`.

## Important

The Firebase web configuration is designed to be present in client-side web code. Do not put service-account credentials, private keys, GitHub tokens, or other secrets into this repository.

Your Firestore Security Rules are the important access-control layer.
