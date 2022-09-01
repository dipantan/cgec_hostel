import { createConnection } from 'mysql2'
const MYSQLHOST = 'containers-us-west-34.railway.app'
const MYSQLUSER = 'root'
const MYSQLDATABASE = 'railway'
const MYSQLPASSWORD = 'lCFxSkVAMQBJjPDVrZUC'
const MYSQLPORT = 6462
const connection = createConnection({
    host: MYSQLHOST,
    user: MYSQLUSER,
    database: MYSQLDATABASE,
    password: MYSQLPASSWORD,
    port: MYSQLPORT
})

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack)
        return
    }
    console.log('connected as id ' + connection.threadId)
})

export default connection
