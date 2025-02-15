import { DataSource, DataSourceOptions } from "typeorm";

const config: DataSourceOptions = {
  type: "postgres",
  host: process.env.DB_host ?? "localhost",
  port: 5432,
  database: process.env.DATABASE ?? "carbuy_dev",
  entities: ["./models/*"],
  synchronize: true,
};

const AppDataSource = new DataSource(config);

try {
  AppDataSource.initialize();
  console.log("Data Source has been initialized!");
} catch (err) {
  console.error("Error during Data Source initialization", err);
}

export default AppDataSource;
