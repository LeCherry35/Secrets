declare namespace NodeJS {
    export interface ProcessEnv {
      PORT: number;
      SECRETS_COLLECTION_NAME: string;
      DB_CONN_STRING: string;
      DB_NAME: string;
    }
  }