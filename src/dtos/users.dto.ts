import { IsNotEmpty, IsString, Length } from 'class-validator';

export class RegisterDTO {
  @Length(10, 20)
  public username: string;

  @IsString()
  @IsNotEmpty()
  @Length(10, 20)
  public password: string;
}

export class LoginDTO {
  @Length(10, 20)
  public username: string;

  @IsString()
  @IsNotEmpty()
  @Length(10, 20)
  public password: string;
}
