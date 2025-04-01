import { DataSource, DataSourceOptions } from "typeorm";
import { config } from "dotenv"
config()

export const options: DataSourceOptions =  {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT as string, 10) || 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || 'inventory',
    entities: ['dist/**/*.entity.js'],    
    migrations: ['dist/db/migrations/*.js'],  
    synchronize: false,              
    logging: true,
};

const appDataSource = new DataSource(options);
export default appDataSource;    