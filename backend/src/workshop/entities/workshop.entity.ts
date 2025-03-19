import { Item } from "src/items/entities/item.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { WorkshopDto } from "../dto/workshop.dto";

class WorkshopDtoOptions {
    withItems: boolean;
}

@Entity()
export class Workshop {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    location: string;

    @Column()
    description: string;

    @OneToMany(() => Item, (item) => item.workshop)
    items: Item[];

    toDTO() {
        const obj: WorkshopDto = {
            id: this.id,
            name: this.name,
            location: this.location,
            description: this.description
        }
        return obj;
    }
}
