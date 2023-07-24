const winston = require('winston');
const { WinstonTransport } = require('@appsignal/nodejs');

// const logLevels = {
//   error: 0,
//   warn: 1,
//   info: 2,
//   http: 3,
//   verbose: 4,
//   debug: 5,
//   trace: 6,
// };

// const logger = winston.createLogger({
//   levels: logLevels,
//   level: 'trace',
//   format: winston.format.combine(
//     winston.format.timestamp(),
//     winston.format.json()
//   ),
//   transports: [
//     new winston.transports.Console(),
//     new winston.transports.File({ filename: 'combined.log' }),
//   ],
// });

// logger.warn('Starting all recurring tasks', {
//   tag: 'starting_recurring_tasks',
//   id: 'TaskManager-1234729',
//   module: 'RecurringTaskManager',
// });

const logger = winston.createLogger({
  transports: [new WinstonTransport({ group: 'b2c_topps' })],
});