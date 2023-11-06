import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("boxes")
export class BoxDB {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "float" })
    x: number;

    @Column({ type: "float" })
    y: number;

    @Column({ type: "float" })
    z: number;

    @Column({ type: "float" })
    scale: number;

    @Column({ type: "varchar", length: 6 })
    color: string;
}
