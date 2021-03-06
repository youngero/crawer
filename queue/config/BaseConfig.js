/**
 * Created by Jericho.ou on 15/8/13.
 */

var path = require('path');
var dirPath = path.join(__dirname, "../");

module.exports={
    /**
     * 日志配置
     */
    logConfig:{
        logLevel:0,
        log4JSConfig: {
            "appenders": [
                {type: "console" /*使用控制台console*/}
                , {
                    "type": "dateFile",
                    "filename": dirPath + "logs/debug/log.log",
                    "pattern": ".yyyy-MM-dd hh",
                    "maxLogSize": 128,
                    "alwaysIncludePattern": false,
                    "backups": 3,
                    "category": "dev"
                },
                {
                    "type": "dateFile",
                    "filename": dirPath + "logs/info/log.log",
                    "pattern": ".yyyy-MM-dd hh",
                    "maxLogSize": 128,
                    "alwaysIncludePattern": false,
                    "backups": 3,
                    "category": "info"
                },
                {
                    "type": "dateFile",
                    "filename": dirPath + "logs/error/log.log",
                    "pattern": ".yyyy-MM-dd hh",
                    "maxLogSize": 128,
                    "alwaysIncludePattern": false,
                    "backups": 3,
                    "category": "error"
                }
            ]
        }
    },
    redisConfig:{
        "host":"127.0.0.1"
        ,"port":6379
    },
    localConfig:[34366,'127.0.0.1'],
    ipWhileList:[]
};