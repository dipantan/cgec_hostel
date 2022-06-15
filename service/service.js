import connection from './connection.js';

// function to register students
export function insertStudents(data, callback) {
    connection.query(
        "insert into students (email,password,mobile,department,semester,name) values (?,?,?,?,?,?)",
        [data.email, data.password, data.mobile, data.department, data.semester, data.name],
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
        "update students set password=?,mobile=?,department=?,semester=?,name=? where email=?",
        [data.password, data.mobile, data.department, data.semester, data.name, data.email],
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
    connection.query(
        "select * from students where email=?",
        [data.email],
        function (err, result) {
            if (err) {
                return callback(err, null);
            }
            return callback(null, result);
        }
    )
}