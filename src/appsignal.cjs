const { Appsignal } = require('@appsignal/nodejs');

new Appsignal({
  active: true,
  name: 'b2c_topps',
  pushApiKey: process.env.APPSIGNAL_PUSH_API_KEY, // Note: renamed from `apiKey` in version 2.2.5
});
