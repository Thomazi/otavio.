import express from 'express';
import UserController from './controllers/UserController';

const app = express();
const userController = new UserController();

app.use(express.json());

app.get('/users', userController.getAllUsers);