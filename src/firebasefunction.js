const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.createUserAndGenerateCustomToken = functions.https.onCall(async (data, context) => {
  try {
    // Your authentication logic here
    const { email, password } = data;
    const userCredential = await admin.auth().createUser({
      email,
      password,
    });
    
    // Generate a custom token for the new user
    const customToken = await admin.auth().createCustomToken(userCredential.uid);

    return {
      customToken,
    };
  } catch (error) {
    console.error(error);
    throw new functions.https.HttpsError("internal", "User creation failed");
  }
});
