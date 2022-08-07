import connection from "../connection.js";

export function adminLogin(data, callback) {
  connection.query(
    "select * from admin_login where email=? and password=?",
    [data.email, data.password],
    function (err, result) {
      if (err) {
        return callback(err, null);
      }
      return callback(null, result);
    }
  );
}

export function complain(callback) {
  connection.query(
    "SELECT title,DESCRIPTION,students.name,students.email FROM complain INNER JOIN students WHERE students.email=complain.email",
    (err, result) => {
      // console.log(result);
      if (err) {
        return callback(err, null);
      }
      return callback(null, result);
    }
  );
}

export function room(callback) {
  connection.query(
    "SELECT `id`,`from_room`,`to_room`,`reason`,`date`,`status`,students.name,students.email FROM room_change_request INNER JOIN students WHERE students.email=room_change_request.email",
    (err, result) => {
      // console.log(result);
      if (err) {
        return callback(err, null);
      }
      return callback(null, result);
    }
  );
}

export function meal(callback) {
  connection.query(
    "SELECT `preference`,`from`,`meal_type`,`to`,students.name,students.email FROM meal INNER JOIN students WHERE students.email=meal.email",
    (err, result) => {
      if (err) {
        return callback(err, null);
      }
      return callback(null, result);
    }
  );
}

export function students(callback) {
  connection.query("SELECT * FROM students", (err, result) => {
    // console.log(result);
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
}

export function updateRoom(data, callback) {
  connection.query(
    "update room_change_request set status=? where id=?",
    [data.status, data.id],
    function (err, result) {
      if (err) {
        return callback(err, null);
      }
      return callback(null, result);
    }
  );
}
