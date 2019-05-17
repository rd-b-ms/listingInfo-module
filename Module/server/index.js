const app = require('./app');

app.listen(app.get('PORT'), () => console.log(`listening on PORT ${app.get('PORT')}...`));
