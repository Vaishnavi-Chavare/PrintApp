const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
const serviceAccount = require('./service-account-key.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Replace <device-fcm-token> with the actual FCM token of the device
const message = {
  notification: {
    title: 'Hello!',
    body: 'This is a test notification',
  },
  token: '<device-fcm-token>',
};

// Send the notification
admin.messaging()
  .send(message)
  .then(response => {
    console.log('Notification sent successfully:', response);
  })
  .catch(error => {
    console.error('Error sending notification:', error);
  });
