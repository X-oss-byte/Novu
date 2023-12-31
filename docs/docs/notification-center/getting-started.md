---
sidebar_position: 1
---

# Getting Started

Novu provides you with a set of APIs and components to create rich customized notification center experiences. You can either choose to work headless with our notification feed API and create your own custom notification center user interface, or use our ready-to-use UI and customize it partially.

![Notification Center](/img/notification-center.png)

## React component

After creating your Novu Platform account and creating your first workflow, it's time to connect the In-app channel to your application.

```bash
npm install @novu/notification-center
```

And in the appropriate place within your app add the `PopoverNotificationCenter` component with the `NovuProvider`

```tsx
import {
  NovuProvider,
  PopoverNotificationCenter,
  NotificationBell,
} from '@novu/notification-center';

function Header() {
  function onNotificationClick(message: IMessage) {
    // your logic to handle the notification click
    if (message?.cta?.data?.url) {
      window.location.href = message.cta.data.url;
    }
  }

  return (
    <NovuProvider subscriberId={'USER_ID'} applicationIdentifier={'APP_ID_FROM_ADMIN_PANEL'}>
      <PopoverNotificationCenter onNotificationClick={onNotificationClick}>
        {({ unseenCount }) => <NotificationBell unseenCount={unseenCount} />}
      </PopoverNotificationCenter>
    </NovuProvider>
  );
}
```

That's it! Now you're ready to send your first notification using Novu.

## Not using React?

We do provide a few other ways to integrate the notification center into your application:

- [Web Component](/notification-center/web-component)
- [Vue Component](/notification-center/vue-component)
- [Angular Component](/notification-center/angular-component)
- [iFrame Embed](/notification-center/iframe-embed)

:::note
Facing issues in using notification center? Check out FAQs [here](./FAQ)
:::
