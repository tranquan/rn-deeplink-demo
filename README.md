# rn-deeplink-demo
React Native DeepLink Demo using React Navigation

### test on android
#### with adb
```
adb shell am start -W -a android.intent.action.VIEW -d "kenji://user" com.deeplink
```

#### with chrome
To make deeplink work with Chrome, the <a> must be sth like
```
<a href="intent://user#Intent;scheme=kenji;package=com.deeplink;S.browser_fallback_url=http%3A%2F%2Fwww.google.com;end"> Open Kenji App, User Screen </a><br />
```

More info: https://developer.chrome.com/multidevice/android/intents
Because new version of chrome change the behaviour how it as act with deeplink
