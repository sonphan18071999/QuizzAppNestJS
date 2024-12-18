import {IsString, IsNotEmpty, IsAlphanumeric, MinLength, IsOptional} from 'class-validator';

export class UserDto {
    @IsOptional()
    @IsString()
    firstName: string;

    @IsOptional()
    @IsString()
    lastName: string;

    @IsString()
    @IsNotEmpty()
    @IsAlphanumeric()
    username: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password: string;
}
