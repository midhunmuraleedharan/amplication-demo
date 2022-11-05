import { Module } from "@nestjs/common";
import { LanguageDemoModuleBase } from "./base/languageDemo.module.base";
import { LanguageDemoService } from "./languageDemo.service";
import { LanguageDemoController } from "./languageDemo.controller";
import { LanguageDemoResolver } from "./languageDemo.resolver";

@Module({
  imports: [LanguageDemoModuleBase],
  controllers: [LanguageDemoController],
  providers: [LanguageDemoService, LanguageDemoResolver],
  exports: [LanguageDemoService],
})
export class LanguageDemoModule {}
