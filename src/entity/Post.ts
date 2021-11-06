import { IsOptional, IsString } from "class-validator";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Post {
  @PrimaryColumn({ type: "int", width: 20 })
  id: number;

  @Column()
  @IsString()
  title: string;

  @Column({ nullable: true })
  @IsOptional()
  @IsString()
  description: string;

  @Column()
  @IsString()
  regDate: string;

  @Column({ type: "varchar", length: "50" })
  @IsString()
  author: string;

  @Column({ nullable: true })
  @IsOptional()
  @IsString()
  imgUrl: string;
}
