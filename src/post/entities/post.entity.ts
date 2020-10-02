import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('crud')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 150 })
  title: string;
  @Column({ type: 'varchar', nullable: false })
  slug!: string;
  @Column({ type: 'varchar', length: 255 })
  excerpt?: string;
  @Column({ type: 'varchar' })
  content!: string;
  @Column({ type: 'varchar', length: 255, nullable: true })
  category: string;
  @Column({ type: 'simple-array' })
  tags: string[];
  @Column({ type: 'bool', default: true })
  status: boolean;
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
