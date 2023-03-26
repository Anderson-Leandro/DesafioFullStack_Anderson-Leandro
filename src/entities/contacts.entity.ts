import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	ManyToOne,
	CreateDateColumn,
} from "typeorm";
import User from "./user.entity";

@Entity("contacts")
class Contact {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ nullable: false })
	name: string;

	@Column({ nullable: false })
	email: string;

	@Column({ nullable: false })
	phoneNumber: string;

	@CreateDateColumn()
	createdAt: Date;

	@ManyToOne(() => User, (user) => user.contacts, { onDelete: "CASCADE" })
	user: User;
}

export default Contact;
