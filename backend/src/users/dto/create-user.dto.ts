import { IAddUser } from '../interfaces/user.interface';
import { IsNotEmpty, IsString } from 'class-validator';

// TODO: extend it later
export class CreateUserDto implements IAddUser {
  @IsString()
  @IsNotEmpty()
  username: string;
}
