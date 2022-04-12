import { IAddUser } from '../interfaces/user.interface';
import { IsNotEmpty, IsString } from 'class-validator';

export class AddUserDto implements IAddUser {
  @IsString()
  @IsNotEmpty()
  username: string;
}
