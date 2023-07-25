import winston from 'winston';
import { WinstonTransport } from '@appsignal/nodejs';

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new WinstonTransport({ group: "b2c_topps" }),
  ],
});

export default logger;
