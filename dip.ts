namespace dip {
  abstract class LoggerService {
    createLog: (logObject: object) => void;
  }

  class RedisLog {
    sendLog(logMessage: string) {
      console.log(`Log Sent to Redis for : ${logMessage}`);
    }
  }

  class GrayLog {
    saveLog(logObject: object) {
      console.log(`Log Sent to Gray for : `, logObject);
    }
  }

  class GrayLoggerService implements LoggerService {
    createLog(logObject: object) {
      const grayLog = new GrayLog();
      grayLog.saveLog(logObject);
    }
  }

  class RedisLoggerService implements LoggerService {
    createLog(logObject: object) {
    //   console.log("logObject", logObject);
      const logMessage = JSON.stringify(logObject);
      const redisLog = new RedisLog();
      redisLog.sendLog(logMessage);
    }
  }

  const errorDecorator = (error: Error, loggerService: LoggerService) => {
    loggerService.createLog({ ...error });
  };

  const main = () => {
    errorDecorator(new Error("Error Message"), new GrayLoggerService());
  };

  main();
}
