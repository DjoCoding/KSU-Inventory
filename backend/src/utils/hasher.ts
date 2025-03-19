import * as bcrypt from "bcrypt"

const rounds = 10;

export async function hash(password: string) {
    const salt = await bcrypt.genSalt(rounds);
    return bcrypt.hash(password, salt);
}

export const validate = async (password: string, hashedPassword: string) => {
    return bcrypt.compare(password, hashedPassword);
}