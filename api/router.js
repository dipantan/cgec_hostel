import express from 'express';
import { insertStudents, updateStudents, deleteStudents, getStudents, insertRoomChange, insertComplain, chnageMeal } from '../service/service.js';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

// Home page route.
router.get('/', function (req, res) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    res.sendFile(__dirname + '/index.html');
})

// insert api
router.post('/insertStudents', function (req, res) {
    insertStudents(req.body, function (err, result) {
        if (err && err.code == 'ER_DUP_ENTRY') {
            res.json({
                status: 'error',
                message: 'Email already exists'
            });
            return;
        }
        res.json({
            status: 'success',
            message: 'Student added successfully'
        });
    });
})

// update api
router.post('/updateStudents', function (req, res) {
    updateStudents(req.body, function (err, result) {
        if (result.affectedRows == 0) {
            res.json({
                status: 'error',
                message: 'Email not found'
            });
            return;
        }
        res.json({
            status: 'success',
            message: 'Updated successfully'
        });
    });
})

// delete api
router.post('/deleteStudents', function (req, res) {
    deleteStudents(req.body, function (err, result) {
        if (result.affectedRows == 0) {
            res.json({
                status: 'error',
                message: 'Account not found'
            });
            return;
        }
        res.json({
            status: 'success',
            message: 'Deleted successfully'
        });
    })
})

// get student details 
router.get('/getStudents', function (req, res) {
    getStudents(req.query, function (err, result) {
        if (result.length == 0) {
            res.json({
                status: 'error',
                message: 'Account not found'
            });
            return;
        }
        // cookie session 
        res.cookie('student', result[0].email, { maxAge: 900000, httpOnly: true });
        res.json(result[0]);
    })
})

// room change request api
router.post('/roomChange', function (req, res) {
    insertRoomChange(req.body, function (err, result) {
        if (err) {
            res.json({
                status: "error",
                message: "Previous request not completed"
            })
            return;
        }
        res.json({
            status: "success",
            message: "Request registered successfully"
        })
    })
})

// complain box
router.post('/complain', function (req, res) {
    insertComplain(req.body, function (err, result) {
        if (err) {
            res.json({
                status: "error",
                message: err.sqlMessage
            })
            return;
        } else {
            res.json({
                status: "success",
                message: "Your complain has been accepted"
            })
        }
    })
})

// meal start/stop
router.post('/meal', function (req, res) {
    chnageMeal(req.body, function (err, result) {
        if (err) {
            res.json({
                status: 'error',
                message: err.sqlMessage
            })
            return;
        } else {
            res.json({
                status: 'success',
                message: 'Your meal request registered'
            })
        }
    })
})


export default router;
