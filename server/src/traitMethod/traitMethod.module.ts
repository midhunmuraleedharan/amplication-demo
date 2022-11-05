import { Module } from "@nestjs/common";
import { TraitMethodModuleBase } from "./base/traitMethod.module.base";
import { TraitMethodService } from "./traitMethod.service";
import { TraitMethodController } from "./traitMethod.controller";
import { TraitMethodResolver } from "./traitMethod.resolver";

@Module({
  imports: [TraitMethodModuleBase],
  controllers: [TraitMethodController],
  providers: [TraitMethodService, TraitMethodResolver],
  exports: [TraitMethodService],
})
export class TraitMethodModule {}
