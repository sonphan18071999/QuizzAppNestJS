import {IAuthService} from "../../shared/interfaces/IAuthService";
import {UserDto} from "../../shared/DTOs/user.dto";

export abstract class AuthServiceBase implements IAuthService {
    abstract login(email: string, password: string): Promise<boolean>;

    abstract register(user:UserDto): Promise<boolean>;

    protected hashPassword(password: string): string {
        return password;
    }

    protected comparePassword(storedPassword: string, providedPassword: string): boolean {
        return storedPassword === providedPassword;
    }
}
