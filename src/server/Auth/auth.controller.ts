// import { Controller, Post, Req, UseGuards, UsePipes, Body, Res } from '@nestjs/common';
// import { ApiUnauthorizedResponse, ApiCreatedResponse, ApiBody, ApiConsumes } from '@nestjs/swagger';
// import { AuthService } from './auth.service';
// import { UserDTO } from '../Users/dto/user.dto';
// import { Request, Response } from 'express';

// @Controller('auth')
// export class AuthController {
//   constructor(private readonly authService: AuthService) {}
//   @ApiConsumes('application/x-www-form-urlencoded')
//   @ApiBody({ type: UserDTO })
//   @UsePipes(new JoiValidationPipe(userValidationSchema))
//   @Post('register')
//   async register(@Body() createUserDto: CreateUserDto): Promise<void> {
//     this.authService.register(createUserDto);
//   }

//   @UseGuards(LocalAuthGuard)
//   @ApiConsumes('application/x-www-form-urlencoded')
//   @ApiBody({ type: UserDTO, description: 'For additional info look CreateUserDto schema' })
//   @ApiCreatedResponse({ description: 'Return object { access_token: token }' })
//   @ApiUnauthorizedResponse()
//   @Post('login')
//   async login(@Req() req: Request, @Res() res: Response) {
//     const { access_token } = await this.authService.login(req.user);
//     res.cookie('access_token', access_token);
//     res.end();
//   }
// }
