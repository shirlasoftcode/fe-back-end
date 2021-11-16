import { User } from "..";
import { ProfileS } from "../profile/profile.serializer";
export declare class UserS {
    id: number;
    name: string;
    lastName: string;
    email: string;
    password: string;
    nickName: string;
    telephoneNumber: string;
    mobileNumber: string;
    profile: ProfileS;
    constructor(partial: User);
}
