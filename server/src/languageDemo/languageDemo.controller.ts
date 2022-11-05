import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LanguageDemoService } from "./languageDemo.service";
import { LanguageDemoControllerBase } from "./base/languageDemo.controller.base";

@swagger.ApiTags("languageDemos")
@common.Controller("languageDemos")
export class LanguageDemoController extends LanguageDemoControllerBase {
  constructor(
    protected readonly service: LanguageDemoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
