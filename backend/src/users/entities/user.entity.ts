import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserDto } from "../dtos/user.dto";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 9 })
    username: string;

    @Column()
    password: string;

    @Column()
    role: string;

    toDTO() {
        return {
            id: this.id,
            username: this.username,
            role: this.role
        } as UserDto;
    }
}