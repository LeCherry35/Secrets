// External Dependencies

import * as mongoDB from "mongodb";
import dotenv from 'dotenv'

// Global Variables

export const collections: { secrets?: mongoDB.Collection } = {}

// Initialize Connection

export async function connectToDatabase () {
    dotenv.config();
 
    // if (typeof process.env.DB_CONN_STRING === 'string' && typeof process.env.GAMES_COLLECTION_NAME === 'string') {
        const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
        await client.connect();
        
        
        const db: mongoDB.Db = client.db(process.env.DB_NAME);
        
        const gamesCollection: mongoDB.Collection = db.collection(process.env.SECRETS_COLLECTION_NAME);
        
        collections.secrets = gamesCollection;
        console.log(`Successfully connected to database: ${db.databaseName} and collection: ${gamesCollection.collectionName}`);
    // }
       
 }