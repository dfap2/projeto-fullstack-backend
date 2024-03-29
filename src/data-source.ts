import "dotenv/config";
import { DataSource, DataSourceOptions } from "typeorm";
import path from "path";
import "reflect-metadata";

const settings = (): DataSourceOptions => {
    const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}");
    const migrationsPath: string = path.join(
        __dirname,
        "./migrations/**.{ts,js}"
    );
    const dbUrl: string | undefined = process.env.DATABASE_URL;

    if (!dbUrl) throw new Error("Missing env var: 'DATABASE_URL'");

    return {
        type: "postgres",
        url: dbUrl,
        logging: false,
        entities: [entitiesPath],
        migrations: [migrationsPath],
    };
};

const AppDataSource = new DataSource(settings());

export { AppDataSource };
