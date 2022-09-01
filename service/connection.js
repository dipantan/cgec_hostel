<<<<<<< HEAD
import { createConnection } from "mysql2";
// const MYSQLHOST = 'containers-us-west-34.railway.app'
// const MYSQLUSER = 'root'
// const MYSQLDATABASE = 'railway'
// const MYSQLPASSWORD = 'iU4OSNlbhmjuw1FEHCYn'
// const MYSQLPORT = 6462
const MYSQLHOST = "localhost";
const MYSQLUSER = "root";
const MYSQLDATABASE = "cgec_hostel";
const MYSQLPASSWORD = "R}~&?4OS[k!zrpB";
const MYSQLPORT = 3306;
=======
import { createConnection } from 'mysql2'
const MYSQLHOST = 'containers-us-west-34.railway.app'
const MYSQLUSER = 'root'
const MYSQLDATABASE = 'railway'
const MYSQLPASSWORD = 'lCFxSkVAMQBJjPDVrZUC'
const MYSQLPORT = 6462
>>>>>>> 1075e96e20239d028f420a70d921f374f0cb651c
const connection = createConnection({
  host: MYSQLHOST,
  user: MYSQLUSER,
  database: MYSQLDATABASE,
  password: MYSQLPASSWORD,
  port: MYSQLPORT,
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

<<<<<<< HEAD
export default connection;
=======
export default connection
>>>>>>> 1075e96e20239d028f420a70d921f374f0cb651c
