import mongo from '../database/mongo';
const DATABASE = process.env.DATABASE;

const confirmate = async (req, res) => {
  await mongo.connect();

  const confirmation = req.body
  console.log("payload ==> ", confirmation)

  const confirmationSaved = await mongo
    .db(DATABASE)
    .collection('confirmations')
    .insertOne(confirmation)

  res.json(confirmationSaved)
}

export default {
  confirmate
}
