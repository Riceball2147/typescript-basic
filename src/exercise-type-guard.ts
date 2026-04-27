type EmailNotification = {
 type: 'email';
 emailAddress: string;
 sendEmail: () => void;
};

type PushNotification = {
 type: 'push';
 deviceToken: string;
 sendPush: () => void;
};

type AppNotification = EmailNotification | PushNotification;

const notify = (appNotification: AppNotification): void => {
  if ('sendEmail' in appNotification) {
    appNotification.sendEmail();
  } else if ('sendPush' in appNotification) {
    appNotification.sendPush();
  }
};

const emailNotification: EmailNotification = {
 type: 'email',
 emailAddress: 'taro.samurai@example.com',
 sendEmail: () => {
   console.log('メール通知を送信しました。');
 },
};

const pushNotification: PushNotification = {
 type: 'push',
 deviceToken: 'abc123xyz',
 sendPush: () => {
   console.log('プッシュ通知を送信しました。');
 },
};

notify(emailNotification);
notify(pushNotification);
