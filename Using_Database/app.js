const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const database = require("./config/Database");
const Classroom = require('./models/Classroom');

dotenv.config();


mongoose.Promise = global.Promise;

database.connect();

