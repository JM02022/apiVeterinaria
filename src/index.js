import app from './app';

import './database/conecction' 
app.listen(app.get('port'))
console.log('puerto usado',app.get('port'))

