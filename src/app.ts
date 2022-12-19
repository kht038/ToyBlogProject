// ----- env ----- //
require('dotenv').config()
const { MONGO_URI, PORT } = process.env


// ----- express, database ----- //
const express = require('express');
const mongoose = require('mongoose');

const app = express();


// ----- database connect -----//
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch((e: Error) => console.error(e));


// ----- open server ----- //
app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});

// _ 를 통해서 사용하지 않는 변수값을 lint, ts에서 무시할 수 있음
// app.get('/', (_req: Request, res: Response) => {
//   res.send('hello World!');
// })