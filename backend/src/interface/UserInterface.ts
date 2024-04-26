import { UserType } from "../enums/UserType"

/**
 * 사용자 개체를 사용하면 시스템에서 수행된 작업을 해당 작업을 수행한 사용자와 연결할 수 있습니다.
 */
export interface UserInterface {
  /**
   * 사용자의 email 은 id 로 사용되며 중복된 이메일을 등록 할수 없습니다.
   * @pattern ^(.+)@(.+)$
   * @example "test@etribe.co.kr"
   */
  email : string
  /**
   * @example "password123"
   */
  password : string
  /**
   * @example "SUPER"
   */
  user_type : UserType
  /**
   * @example true
   */
  user_status? : boolean
  /**
   * @minLength 11
   * @example "01012345678"
   */
  phone_number : string
}

/**
 * 사용자 개체를 화면으로 반환하기 위한 인터페이스
 * (반환 타입이여서 데이터가 없을시 undefined 으로 반환 된다.)
 */
export interface UserResponseInterface {
  /**
   * 사용자의 email 은 id 로 사용되며 중복된 이메일을 등록 할수 없습니다.
   * @pattern ^(.+)@(.+)$
   * @example "test@etribe.co.kr"
   */
  email : string | undefined;
  /**
   * @example "SUPER"
   */
  user_type : UserType | undefined;
  /**
   * @example true
   */
  user_status : boolean | undefined;
  /**
   * @minLength 11
   * @example "01012345678"
   */
  phone_number : string | undefined;
}

export interface findUserParams {
  /**
   * 사용자 이메일
   * @pattern ^(.+)@(.+)$
   * @example "test@etribe.co.kr"
   */
  email?: string;
  /**
   * @example true|false
   */
  user_status? : boolean;
  /**
   * @example "SUPER"
   */
  user_type?: UserType;
  /**
   * @minLength 11
   * @example "SUPER"
   */
  phone_number?: string;
}