import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TraitMethodService } from "./traitMethod.service";
import { TraitMethodControllerBase } from "./base/traitMethod.controller.base";

@swagger.ApiTags("traitMethods")
@common.Controller("traitMethods")
export class TraitMethodController extends TraitMethodControllerBase {
  constructor(
    protected readonly service: TraitMethodService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
