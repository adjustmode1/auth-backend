import { Module } from "@nestjs/common";
import { AuthTokenController } from "./auth-token.controller";
import { AuthTokenService } from "./auth-token.service";

@Module({
    imports: [],
    controllers: [AuthTokenController],
    providers: [AuthTokenService],
})
export class AuthTokenModule {}