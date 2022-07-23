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

// function to insert room change requests
export function insertRoomChange(data, callback) {
    connection.query("select * from room_change_request where email = ? and status = 'pending'",
        [data.email],
        function (err, result) {
            if (err) {
                return callback(err, null)
            } else {
                if (result.length > 0) {
                    // previous request not completed
                    return callback("error", null)
                } else {
                    // accept new request
                    var date = new Date().toLocaleDateString()  //  mm/dd/yyyy
                    connection.query(
                        "insert into room_change_request (from_room,to_room,reason,date,email) values (?,?,?,?,?)",
                        [data.from_room, data.to_room, data.reason, date, data.email],
                        function (err, result) {
                            if (err) {
                                return callback(err, null)
                            }
                            return callback(null, result)
                        }
                    )
                }
            }
        })
}

// function to insert complain
export function insertComplain(data, callback) {
    connection.query("insert into complain (description,email,title) values (?,?,?)",
        [data.description, data.email, data.title],
        function (err, result) {
            if (err) {
                return callback(err, null)
            }
            return callback(null, result)
        })
}

// function to start/stop meal
export function chnageMeal(data, callback) {
    connection.query("insert into meal (`email`,`preference`,`from`,`meal_type`,`to`) values (?,?,?,?,?)",
        [data.email, data.preference, data.from, data.meal_type, data.to],
        function (err, result) {
            if (err) {
                return callback(err, null)
            } else {
                return callback(null, result)
            }
        })
}