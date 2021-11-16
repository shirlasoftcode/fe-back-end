import { BaseEntity } from 'typeorm';
import { Profile } from '../profile/profile.entity';
export declare class User extends BaseEntity {
    id: number;
    name: string;
    last_name: string;
    email: string;
    password: string;
    nick_name: string;
    telephone_number: string;
    mobile_number: string;
    profile: Profile;
}
