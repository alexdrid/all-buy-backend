
import mongoose from 'mongoose'
import logger from './logger';

const connectDB = async () => {
    try {
        const dbUrl = process.env.MONGO_URI || ''
        const dbConnection = await mongoose.connect(dbUrl, {
            dbName: 'buyit'
        });

        logger.info(`MongoDB Connected: ${dbConnection.connection.host}, database ${dbConnection.connection.name}`)
    } catch (error) {
        handleError(error);
    }
}

const handleError = (error: any) => {
    logger.error(`Error: ${error.message}`)
    process.exit(1)
}
export default connectDB