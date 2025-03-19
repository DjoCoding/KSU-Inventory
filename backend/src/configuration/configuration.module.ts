import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: ".env"
        })
    ],
    providers: [ConfigService],
    exports: [ConfigService]
})
export class ConfigurationModule {}