import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI || 'mongodb://localhost:57119/wedding-confirmation', { useUnifiedTopology: true })

export default client;
