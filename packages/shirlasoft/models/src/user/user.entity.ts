import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, BaseEntity } from 'typeorm';
import { Profile } from '../profile/profile.entity';
@Entity({name:'user'})
export  class  User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    last_name:string;

    @Column()
    email:string;

    @Column()
    password:string;

    @Column()
    nick_name:string;

    @Column()
    telephone_number:string;

    @Column()
    mobile_number:string;

    @ManyToOne(type => Profile, profile => profile.user)
    @JoinColumn({name: "profile_id"}) 
    profile:Profile;

}