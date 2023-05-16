import crypto from "crypto";
//encrypt password
export function encryptPassword(password) {
    const salt = process.env.PASSWORD_SALT;
    const hash = crypto.createHmac("sha256", salt).update(password).digest("hex");
    return hash;
}
