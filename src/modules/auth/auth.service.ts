import {Injectable} from '@nestjs/common';
import {UserDto} from "../../shared/DTOs/user.dto";
import {InjectModel} from "@nestjs/mongoose";
import {Model, Promise} from "mongoose";
import {AuthServiceBase} from "./base-auth.service";
import {Auth} from "./auth.schema";

@Injectable()
export class AuthService extends AuthServiceBase {
    constructor(@InjectModel(Auth.name) private authModel: Model<Auth>) {
        super();
    }

    public async login(email: string, password: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    public async register(user: UserDto): Promise<boolean> {
        try {
            const existingUser = await this.authModel.findOne({username: user.username});
            if (existingUser) {
                return false;
            }

            const newUser = new this.authModel(user);
            await newUser.save();

            return true;
        } catch (error) {
            console.error('Error during user registration:', error);
            return false;
        }
    }
}
