import logger from "pino";

const log = logger({
    transport: {
        target: 'pino-pretty',
        
        options: {
            colorize: true,
            translateTime: "yyyy-mm-dd HH:MM:ss"
        },
    },
    base: {
        pid: false
    }
})

export default log