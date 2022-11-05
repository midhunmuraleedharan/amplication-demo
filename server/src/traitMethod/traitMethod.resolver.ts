import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { TraitMethodResolverBase } from "./base/traitMethod.resolver.base";
import { TraitMethod } from "./base/TraitMethod";
import { TraitMethodService } from "./traitMethod.service";

@graphql.Resolver(() => TraitMethod)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TraitMethodResolver extends TraitMethodResolverBase {
  constructor(
    protected readonly service: TraitMethodService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
