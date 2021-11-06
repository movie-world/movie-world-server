import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Content {
  @PrimaryColumn({ type: "int", width: 20 })
  id: number;

  @Column({ type: "text" })
  content: string;
}
