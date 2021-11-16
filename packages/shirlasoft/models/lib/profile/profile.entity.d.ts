import { BaseEntity } from "typeorm";
import { User } from "..";
export declare class Profile extends BaseEntity {
    id: number;
    name: string;
    user: User[];
}
