import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, Entity } from 'typeorm';

@Entity()
export class UserModel {
  // 유저 ID (UUID 형식)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // 이메일 (고유한 값)
  @Column({ unique: true })
  email: string;

  // 사용자 이름
  @Column()
  userName: string;

  // 비밀번호 (암호화된 값 저장)
  @Column()
  password: string;

  // 생성일
  @CreateDateColumn()
  createdAt: Date;

  // 수정일
  @UpdateDateColumn()
  updatedAt: Date;

  // 권한 (슈퍼, 어드민, 일반)
  @Column({ type: 'enum', enum: ['super', 'admin', 'normal'], default: 'normal' })
  userType: 'super' | 'admin' | 'normal';

  // 성별 (남자, 여자, 기타)
  @Column({ type: 'enum', enum: ['male', 'female', 'other'], nullable: true })
  sex?: 'male' | 'female' | 'other';

  // 나이
  @Column({ type: 'int', nullable: true })
  age?: number;

  // 주소
  @Column({ nullable: true })
  address?: string;

  // 전화번호
  @Column({ nullable: true })
  phoneNumber?: string;

  // 프로필 사진 URL
  @Column({ nullable: true })
  profilePictureUrl?: string;

  // 마지막 로그인 시간
  @Column({ type: 'timestamp', nullable: true })
  lastLoginAt?: Date;

  // 이메일 인증 여부
  @Column({ default: false })
  isEmailVerified: boolean;

  // 활성화 여부
  @Column({ default: true })
  isActive: boolean;
}
