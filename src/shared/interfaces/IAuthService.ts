import {UserDto} from "../DTOs/user.dto";

export interface IAuthService {
    login(email: string, password: string): Promise<boolean>;
    register(user:UserDto): Promise<boolean>;
}