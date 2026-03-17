
# Diabetes-Management-Application

The aim of this project is to design and prototype a mobile health (mHealth) application to support individuals with type 2 diabetes, particularly in low- and middle-income countries (LMICs). The app will focus on improving blood sugar control, medication adherence, and digital literacy, especially for middle-aged users with limited experience using mobile technology. The system will be multilingual, lightweight, and capable of functioning offline.

## Offline Functionality

The application is designed to support offline usage, which is important for users in areas with unstable internet connectivity.
When a user saves data while offline, the information is stored locally and added to a queue. Once the device reconnects to the internet, queued operations are replayed and synchronised with the backend automatically.
  
When the device is offline, the system will:

1. Store UI state in local storage
2. Queue API mutation in IndexedDB
3. Automatically synchronise when the connection is restored
4. Prevent duplicate submissions using idempotency keys

## Prerequisites

* [Node](https://nodejs.org/en)
* [Vercel](https://vercel.com/)
* [MongoDB](https://www.mongodb.com/)

## Development

This project requires a `.env` file to run the backend locally. Before running the project, copy the `example.env` file and rename to `.env` in the root directory and edit the following variables:

* The JWT_SECRET should be a long, random string for security. Generate one with

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

* Generate the vapid keys with

```bash
npx web-push generate-vapid-keys
```

```env
JWT_SECRET = yourjwtsecret
VAPID_PUBLIC_KEY = generated_public_key
VAPID_PRIVATE_KEY = generated_private_key
```

## Run locally

After cloning the repository run `npm install` to install dependencies.

* To run `npm run dev`.
* To build `npm run build`.
* To serve `npm run serve`.

