//LOAD MODULE DEPENDENCIES
var express = require('express');
var adminRouter = require('./admin');
var assignmentRouter = require('./assignment');
var courseRouter = require('./course');
var examRouter = require('./exam');
var profileRouter = require('./profile');
var traineeRouter = require('./trainee');
var userRouter = require('./user');

//initialize router
module.exports = function initRouter(app) {

    //admin endpoints
    app.use('/admins', adminRouter);

    //assignment ENDPOINTS
    app.use('/assignments', assignmentRouter);

    //course ENDPOINTS
    app.use('/courses', courseRouter);

    //exam ENDPOINTS
    app.use('/exams', examRouter);

    //profile ENDPOINTS
    app.use('/profiles', profileRouter);

    //trainee ENDPOINTS
    app.use('/trainees', traineeRouter);

    //USER ENDPOINTS
    app.use('/users', userRouter);

};