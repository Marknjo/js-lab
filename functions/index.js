const functions = require('firebase-functions');
const admin = require('firebase-admin');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

admin.initializeApp();

const setUseAdmin = async function (data) {
  try {
    // get user & add custom clain (Admin)
    const user = await admin.auth().getUserByEmail(data.email);

    await admin.auth().setCustomUserClaims(user.uid, {
      admin: true,
    });

    return {
      message: `Success! ${data.email} has been made an admin`,
    };
  } catch (error) {
    return error;
  }
};

exports.addAdminRole = functions.https.onCall((data, context) => {
  setUseAdmin(data);
});
