const 	express = require('express'),
		http = require('http'),
		morgan = require('morgan'),
		hostname = 'localhost',
		port = 3000,
		app = express(),
		bodyParser = require('body-parser');

app.use(morgan('dev'));

const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

