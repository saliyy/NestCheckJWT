import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('users')
export class ZavgarUsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;
}
