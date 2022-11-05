import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { LanguageDemoResolverBase } from "./base/languageDemo.resolver.base";
import { LanguageDemo } from "./base/LanguageDemo";
import { LanguageDemoService } from "./languageDemo.service";

@graphql.Resolver(() => LanguageDemo)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class LanguageDemoResolver extends LanguageDemoResolverBase {
  constructor(
    protected readonly service: LanguageDemoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
