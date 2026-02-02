import { Controller, Post } from "@nestjs/common";

@Controller('auth-token')
export class AuthTokenController {
    @Post('register')
    register() {
        return '';
    }

    @Post('login')
    login() {
        return '';
    }

    @Post('logout')
    logout() {

    }

    @Post('refresh-token')
    refreshToken() {
        return '';
    }
}