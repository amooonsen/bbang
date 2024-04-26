// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Hidden,
//   Patch,
//   Post,
//   Queries,
//   Query,
//   Route,
//   Security,
//   SuccessResponse,
//   Tags
// } from "tsoa";
// import {findUserParams, UserInterface, UserResponseInterface} from "../interfaces/UserInterface";
// import {UserService} from "../services";


// @Route('user')
// @Tags('User')
// export class UserController extends Controller {
//   /**
//    * 사용자의 정보를 받아 생성합니다.
//    * @summary 사용자 등록 Api
//    * @parameters UserInterface
//    */
//   @Post("/signup")
//   @SuccessResponse("201", "User Created")
//   public async signUp(@Body() requestBody: UserInterface): Promise<UserInterface | null> {
//       this.setStatus(201)
//       return UserService.insertUser(requestBody);
//   }

//   /**
//    * -------------------------------------------
//    * 전체 사용자의 정보를 찾습니다.
//    * parameter 는 아래와 같이 사용됩니다.
//    * --------------------------------------------
//    * email=test@email.com
//    * user_type=SUPER
//    * user_status=true
//    * phone_number=01000000000
//    *
//    * @summary 전체 이용자중 특정 이용자만 찾는 API
//    * @param param
//    */
//   @Get("/search")
//   @Security("auth")
//   @SuccessResponse("200", "User List")
//   public async findAllUsers(@Queries() param:findUserParams): Promise<UserResponseInterface[]> {
//       return UserService.findAllUsers(param)
//           .then((users) => users.map((user) => {
//               return {
//                   email: user.email
//                   , user_type: user.user_type
//                   , user_status: user.user_status
//                   , phone_number: user.phone_number
//               }
//           }))
//   }

//   /**
//    * 이메일로 계정을 찾아 사용
//    * @summary 이메일로 계정 정보 찾기 Api
//    * @param email
//    */
//   @Get("/:email")
//   @Security("auth")
//   @SuccessResponse("200", "User Detail")
//   public async findUserByEmail(email: string): Promise<UserResponseInterface> {
//       return UserService.findUserByEmail(email).then(async (user) => {
//           return {
//               email: user?.email
//               , user_type: user?.user_type
//               , user_status: user?.user_status
//               , phone_number: user?.phone_number
//           }
//       })
//   }

//   /**
//    * 이메일로 계정을 찾아 계정 수정
//    * @summary 이메일로 계정을 찾아 계정 수정 Api
//    * @param userInterface
//    */
//   @Patch("/:email")
//   @Security("auth")
//   @SuccessResponse("204", "User Updated")
//   public async updateUser(@Body() userInterface: UserInterface): Promise<void | null> {
//       return UserService.updateUser(userInterface);
//   }

//   /**
//    * 이메일로 계정을 찾아 계정 삭제
//    * @summary 이메일로 계정을 찾아 계정 삭제 Api
//    * @param email
//    */
//   @Delete("/:email")
//   @Security("auth")
//   @SuccessResponse("204", "User Deleted")
//   public async deleteUser(email: string): Promise<void | null> {
//       // pw.comapre 넣어야...
//       return UserService.deleteUser({email: email});
//   }

// }