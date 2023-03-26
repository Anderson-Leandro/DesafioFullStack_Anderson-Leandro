import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	OneToMany,
	CreateDateColumn,
	BeforeInsert,
	BeforeUpdate,
} from "typeorm";
import { hashSync, getRounds } from "bcryptjs";
import Contact from "./contacts.entity";

@Entity("users")
class User {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	name: string;

	@Column({ unique: true })
	email: string;

	@Column()
	password: string;

	@Column()
	phoneNumber: string;

	@CreateDateColumn()
	createdAt: Date;

	@OneToMany(() => Contact, (contact) => contact.user)
	contacts: Contact;

	@BeforeUpdate()
	@BeforeInsert()
	hashPassword() {
		const isEncrypted = getRounds(this.password);
		if (!isEncrypted) {
			this.password = hashSync(this.password, 10);
		}
	}
}

export default User;
