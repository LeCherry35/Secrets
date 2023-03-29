// External Dependencies

import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import User from "../models/user";

// Global Config

export const userRouter = express.Router();

userRouter.use(express.json());

// GET

userRouter.get("/", async (_req: Request, res: Response) => {
    try {
    //    const users = (await collections.secrets.find({}).toArray()) as User[];

        res.status(200).send('users');
        // res.status(200).send(users);
    } catch {
        res.status(500).send('error');
    }
});

// POST

// PUT

// DELETE