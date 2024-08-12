import express from 'express';
const route = express.Router();
import  create  from '../Controller/userController.js';
import fetch from '../Controller/userController.js';
import update from '../Controller/userController.js';
import deletes from '../Controller/userController.js';

route.post("/create",create);
route.get("/fetch",fetch);
route.put("/update/:id",update);
route.delete("/delete/:id",deletes);
export default route;