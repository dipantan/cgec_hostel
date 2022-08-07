import express from "express";
import path from "path";
import {
  adminLogin,
  complain,
  meal,
  room,
  students,
  updateRoom,
} from "../../service/admin/service.js";

const adminRouter = express.Router();

adminRouter.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
          body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              font-size: 14px;
          }
  
          a {
              text-decoration: none;
              color: blue;
              font-size: medium;
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              font-weight: 600;
          }
      </style>
  </head>
  
  <body>
      <!-- welcome to our api page -->
      <h1>Welcome to Admin API</h1>
      <p>
          This is a simple api that allows you to create, read, update, and delete data from a database.
      </p>
      <p>
          You can use the following endpoints to interact with the database:
      </p>
      <ol>
          <li>
              <a href="#">Insert</a>
          </li>
          <li>
              <a href="#">Get</a>
          </li>
          <li>
              <a href="#">Update</a>
          </li>
          <li>
              <a href="#">Delete</a>
          </li>
      </ol>
  
      <!-- welcome to our api page -->
  
  </body>
  
  </html>`);
});

// admin login
adminRouter.post("/login", (req, res) => {
  adminLogin(req.body, (err, result) => {
    if (err) {
      res.json({
        status: "error",
        messsage: "Something went wrong",
      });
      return;
    } else if (result.length == 0) {
      res.json({
        status: "error",
        messsage: "Wrong email or password",
      });
      return;
    }
    res.json({
      status: "success",
      data: result,
    });
  });
});

// complain
adminRouter.post("/complains", (req, res) => {
  complain((err, result) => {
    if (err) {
      res.json({
        status: "error",
        message: "Something went wrong",
      });
      return;
    } else if (result.length == 0) {
      res.json({
        status: "error",
        message: "No records found",
      });
      return;
    }
    res.json(result);
  });
});

// meal
adminRouter.post("/meal", (req, res) => {
  meal((err, result) => {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
      return;
    } else if (result.length == 0) {
      res.json({
        status: "error",
        message: "No records found",
      });
      return;
    }
    res.json(result);
  });
});

// room_change
adminRouter.post("/room", (req, res) => {
  room((err, result) => {
    if (err) {
      res.json({
        status: "error",
        message: "Something went wrong",
      });
      return;
    } else if (result.length == 0) {
      res.json({
        status: "error",
        message: "No records found",
      });
      return;
    }
    res.json(result);
  });
});

// students
adminRouter.post("/students", (req, res) => {
  students((err, result) => {
    if (err) {
      res.json({
        status: "error",
        message: "Something went wrong",
      });
      return;
    } else if (result.length == 0) {
      res.json({
        status: "error",
        message: "No records found",
      });
      return;
    }
    res.json(result);
  });
});

// update room
adminRouter.post("/updateroom", (req, res) => {
  updateRoom(req.body, (err, result) => {
    if (err) {
      res.json({
        status: "error",
        messsage: "Something went wrong",
      });
      return;
    }
    res.json({
      status: "success",
      data: result,
    });
  });
});

export default adminRouter;
