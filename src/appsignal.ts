import { Appsignal } from '@appsignal/nodejs';

export const appsignal = new Appsignal({
  active: true,
  name: 'test_logging',
  disableDefaultInstrumentations: [
    '@opentelemetry/instrumentation-http',
  ],
});
