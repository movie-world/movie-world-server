import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Post } from "./Post";

@Entity()
export class Content {
  @PrimaryColumn({ type: "int", width: 20 })
  id: number;

  @Column({ type: "text" })
  content: string;

}
