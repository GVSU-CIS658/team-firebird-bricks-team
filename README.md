### View the Project

Live website: https://webpagepioneers.com/

### Run Locally

Installation guide:

1. Install the dependencies with `npm install`
2. Provide your own `.env` connection to a Firebase project (see `.env.example`)
3. Run `npm run dev` to start the dev server

### Firebase Setup

In the [Firebase Console](https://console.firebase.google.com):

1. **Authentication** → enable **Email/Password** sign-in
2. **Firestore Database** → create a database and publish security rules
3. **Storage** → enable and publish security rules
4. **Authentication → Settings → Authorized domains** → add the domain you deploy to