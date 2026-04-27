"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notify = (appNotification) => {
    if ('sendEmail' in appNotification) {
        appNotification.sendEmail();
    }
    else if ('sendPush' in appNotification) {
        appNotification.sendPush();
    }
};
const emailNotification = {
    type: 'email',
    emailAddress: 'taro.samurai@example.com',
    sendEmail: () => {
        console.log('メール通知を送信しました。');
    },
};
const pushNotification = {
    type: 'push',
    deviceToken: 'abc123xyz',
    sendPush: () => {
        console.log('プッシュ通知を送信しました。');
    },
};
notify(emailNotification);
notify(pushNotification);
