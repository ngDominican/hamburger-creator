// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API: 'https://localhost:5001/api',
  firebase: {
    apiKey: "AIzaSyA8KJYmT8iF8bF7cuPq9shIeSLrDkcqIcA",
    authDomain: "hamburger-creator-analytics.firebaseapp.com",
    databaseURL: "https://hamburger-creator-analytics.firebaseio.com",
    projectId: "hamburger-creator-analytics",
    storageBucket: "hamburger-creator-analytics.appspot.com",
    messagingSenderId: "220768542236",
    appId: "1:220768542236:web:e3a22ba19561ba68c449d9",
    measurementId: "G-FCHRRE8KFE"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
