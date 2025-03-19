import { Workshop } from "src/workshop/entities/workshop.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ItemDto } from "../dtos/item.dto";

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    location: string;

    @Column()
    description: string;

    @Column("text", { array: true })
    pictures: string[];

    @ManyToOne(() => Workshop, (workshop) => workshop.items)
    @JoinColumn({ name: "workshop_id" })
    workshop: Workshop;

    toDTO() {
        const obj: ItemDto = {
            id: this.id,
            name: this.name,
            location: this.location,
            description: this.description,
            pictures: this.pictures,
            workshop: this.workshop
        }

        return obj;
    }
}