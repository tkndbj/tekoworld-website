/**
 * The one Firebase web app this site talks to: the game's own project, `glimmer-groove-1cd60`,
 * as the "Tekoworld Admin" web app registered in it.
 *
 * Used by the admin pages only, and loaded only by them - the public pages import nothing from
 * here, so the site the stores and players see still sets no cookies and loads no SDK. These
 * values are not secrets: a Firebase web config identifies the project to the browser, and what
 * protects anything is the server - every admin callable checks the caller's verified Google
 * account against the owner's three addresses (`firebase/functions/src/deals.ts`).
 *
 * Sign-in from this site works because `tekoworld.com` and `www.tekoworld.com` are in the
 * project's Authorized domains (Firebase console > Authentication > Settings), and because the
 * API key below - "Browser key (auto created by Firebase)" - only answers requests from
 * tekoworld.com, www.tekoworld.com, the project's firebaseapp.com / web.app hosts (the sign-in
 * popup runs there) and http://localhost:3000 (Google Cloud console > APIs & Services >
 * Credentials). A new host - a preview deployment, a renamed domain - has to be added in both
 * places before it can sign in.
 */

import { getApp, getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFunctions, type Functions } from "firebase/functions";

const config = {
  apiKey: "AIzaSyBI72XrlFjrbNuEBl7rATMDK4MjWuwGX6I",
  authDomain: "glimmer-groove-1cd60.firebaseapp.com",
  projectId: "glimmer-groove-1cd60",
  appId: "1:310440655052:web:c5c7ead935e33575492a69",
  messagingSenderId: "310440655052",
};

/** Where the functions run - `REGION` in the functions' `config.ts`. */
const REGION = "europe-west1";

function app(): FirebaseApp {
  return getApps().length > 0 ? getApp() : initializeApp(config);
}

export function webAuth(): Auth {
  return getAuth(app());
}

export function webFunctions(): Functions {
  return getFunctions(app(), REGION);
}
