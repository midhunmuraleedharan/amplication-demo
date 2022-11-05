/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateTraitMethodArgs } from "./CreateTraitMethodArgs";
import { UpdateTraitMethodArgs } from "./UpdateTraitMethodArgs";
import { DeleteTraitMethodArgs } from "./DeleteTraitMethodArgs";
import { TraitMethodFindManyArgs } from "./TraitMethodFindManyArgs";
import { TraitMethodFindUniqueArgs } from "./TraitMethodFindUniqueArgs";
import { TraitMethod } from "./TraitMethod";
import { TraitMethodService } from "../traitMethod.service";

@graphql.Resolver(() => TraitMethod)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TraitMethodResolverBase {
  constructor(
    protected readonly service: TraitMethodService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "TraitMethod",
    action: "read",
    possession: "any",
  })
  async _traitMethodsMeta(
    @graphql.Args() args: TraitMethodFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [TraitMethod])
  @nestAccessControl.UseRoles({
    resource: "TraitMethod",
    action: "read",
    possession: "any",
  })
  async traitMethods(
    @graphql.Args() args: TraitMethodFindManyArgs
  ): Promise<TraitMethod[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => TraitMethod, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "TraitMethod",
    action: "read",
    possession: "own",
  })
  async traitMethod(
    @graphql.Args() args: TraitMethodFindUniqueArgs
  ): Promise<TraitMethod | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => TraitMethod)
  @nestAccessControl.UseRoles({
    resource: "TraitMethod",
    action: "create",
    possession: "any",
  })
  async createTraitMethod(
    @graphql.Args() args: CreateTraitMethodArgs
  ): Promise<TraitMethod> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => TraitMethod)
  @nestAccessControl.UseRoles({
    resource: "TraitMethod",
    action: "update",
    possession: "any",
  })
  async updateTraitMethod(
    @graphql.Args() args: UpdateTraitMethodArgs
  ): Promise<TraitMethod | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => TraitMethod)
  @nestAccessControl.UseRoles({
    resource: "TraitMethod",
    action: "delete",
    possession: "any",
  })
  async deleteTraitMethod(
    @graphql.Args() args: DeleteTraitMethodArgs
  ): Promise<TraitMethod | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
