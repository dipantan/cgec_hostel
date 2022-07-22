import connection from './connection.js';

// function to register students
export function insertStudents(data, callback) {
    connection.query(
        "insert into students (email,password,mobile,department,semester,name,roll) values (?,?,?,?,?,?,?)",
        [data.email, data.password, data.mobile, data.department, data.semester, data.name, data.roll],
        function (err, result) {
            if (err) {
                return callback(err, null);
            }
            return callback(null, result);
        }
    )
}

// function to update students
export function updateStudents(data, callback) {
    connection.query(
        "update students set password=?,mobile=?,department=?,semester=?,name=?,roll=? where email=?",
        [data.password, data.mobile, data.department, data.semester, data.name, data.roll, data.email],
        function (err, result) {
            if (err) {
                return callback(err, null);
            }
            return callback(null, result);
        }
    )
}

// function to delete students
export function deleteStudents(data, callback) {
    connection.query(
        "delete from students where email=?",
        [data.email],
        function (err, result) {
            if (err) {
                return callback(err, null);
            }
            return callback(null, result);
        }
    )
}

// function to get students
export function getStudents(data, callback) {
    console.log(data);
    connection.query(
        "select * from students where email=? and password=?",
        [data.email, data.password],
        function (err, result) {
            if (err) {
                return callback(err, null);
            }
            return callback(null, result);
        }
    )
}