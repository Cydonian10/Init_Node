import { DataSource, DataSourceOptions } from "typeorm";

interface Options {
  type: any;
}

export class Database {
  private static dataSource: DataSource;

  static async connect(options: DataSourceOptions) {
    try {
      this.dataSource = new DataSource(options);
      await this.dataSource.initialize();
      console.log("Database existos rotundos");
    } catch (error) {
      console.log("Error database connect", error);
      throw error;
    }
  }

  static async disconnect() {
    this.dataSource.destroy();
  }
}
