import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "..";

@Entity({name: "profile"})
export class Profile extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @OneToMany(type => User, user => user.profile)
    user:User[]
}