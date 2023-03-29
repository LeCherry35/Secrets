// External dependencies

import { ObjectId } from "mongodb";

// Class Implementation

export default class User {
    constructor(public username: string, public email: string, public id?: ObjectId) {}
}