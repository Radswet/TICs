import { config } from "dotenv";
config();

export const MONGODB_URI = process.env.MONGODB_URI;

export const PORT = process.env.PORT || 3000;

export const SECRET = process.env.SECRET;

export const BASEURL = process.env.BASE_URL;

export const CLIENTID = process.env.CLIENT_ID;

export const ISSUER = process.env.ISSUER;