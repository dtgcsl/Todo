import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UsersHasTodos } from './usersHasTodos.entity';
import { Role } from './role.entity';

@Entity({ name: 'users' })
export class Users {
  @PrimaryGeneratedColumn()
  uid: number;
  @Column('varchar')
  name: string;
  @Column({ type: 'varchar', select: false })
  password: string;

  @OneToMany(() => UsersHasTodos, (usersHasTodos) => usersHasTodos.users, {
    cascade: true,
  })
  usersHasTodos: UsersHasTodos[];

  @OneToMany(() => Role, (role) => role.users, {
    cascade: true,
  })
  roles: Role[];
}
