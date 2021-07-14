var admin = require("firebase-admin");

var serviceAccount = require('./react-grid-dashboard-25088-firebase-adminsdk-2eznk-eaa2b289f3.json');

var uid = process.argv[2];

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

admin.auth().setCustomUserClaims(uid, { admin: true })
    .then( () => {
        console.log('Custom claims set for user ', uid);
        process.exit()
    })
    .catch( (error) => {
        console.log(error);
        process.exit(1);
    })