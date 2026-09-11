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
