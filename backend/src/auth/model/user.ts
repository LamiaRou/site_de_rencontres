import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { Optional } from '@nestjs/common';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fname: string;

  @Column()
  lname: string;


  @Column()
  address: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  gender: string;

  @Column()
  date: string;

  @Column()
  description : string;

  @Column()
  image : string;
}
