import app from '../index'
import database from '../database/mongoose';
import env from '../config/environment'

app.listen(4000, () => console.log("Listening in port 4000")) 
database(env);

