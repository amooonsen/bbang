import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, Entity, VersionColumn } from 'typeorm';

@Entity()
export class UserModel {
  // 유저 ID (UUID 형식)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // 이메일 (고유한 값)
  @Column({ unique: true, type: 'varchar' })
  email: string;

  // 사용자 이름
  @Column({ type: 'varchar' })
  userName: string;

  // 비밀번호 (암호화된 값 저장)
  @Column({ type: 'varchar' })
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
  @Column({ type: 'varchar', nullable: true })
  address?: string;

  // 전화번호
  @Column({ type: 'varchar', nullable: true })
  phoneNumber?: string;

  // 프로필 사진 URL
  @Column({ type: 'varchar', nullable: true })
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

  // 데이터 업데이트 확인용
  // save 함수 호출된 횟수 기입
  @VersionColumn()
  version: number;
}
