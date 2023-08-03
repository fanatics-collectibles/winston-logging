const { Appsignal } = require("@appsignal/nodejs");

new Appsignal({
  active: true,
  name: 'test_logging',
  disableDefaultInstrumentations: [
    // Add the following line inside the list
    '@opentelemetry/instrumentation-http',
  ],
});
