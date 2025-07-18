const express = require(express);
const app = express();
require(dotenv).config();

app.use(express.json());

const userRoute = require('./routes/userRoute');
const bookRoute = require('./routes/bookRoute');
const reviewRoute = require('./routes/reviewRoute');

app.use('/user',userRoute);
app.use('/book',bookRoute);
app.use('/review',reviewRoute);

const port = process.env.PORT || 8080;
app.listen(port,() => {console.log(`Server is running on port: ${port}`)});