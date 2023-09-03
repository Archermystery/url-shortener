import { DataSource } from "typeorm"
export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "db/db.db",
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
})
