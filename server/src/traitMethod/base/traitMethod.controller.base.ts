/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { TraitMethodService } from "../traitMethod.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TraitMethodCreateInput } from "./TraitMethodCreateInput";
import { TraitMethodWhereInput } from "./TraitMethodWhereInput";
import { TraitMethodWhereUniqueInput } from "./TraitMethodWhereUniqueInput";
import { TraitMethodFindManyArgs } from "./TraitMethodFindManyArgs";
import { TraitMethodUpdateInput } from "./TraitMethodUpdateInput";
import { TraitMethod } from "./TraitMethod";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TraitMethodControllerBase {
  constructor(
    protected readonly service: TraitMethodService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "TraitMethod",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: TraitMethod })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: TraitMethodCreateInput
  ): Promise<TraitMethod> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        display: true,
        id: true,
        method: true,
        sortFactor: true,
        totalPoints: true,
        types: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "TraitMethod",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [TraitMethod] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(TraitMethodFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<TraitMethod[]> {
    const args = plainToClass(TraitMethodFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        display: true,
        id: true,
        method: true,
        sortFactor: true,
        totalPoints: true,
        types: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "TraitMethod",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: TraitMethod })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: TraitMethodWhereUniqueInput
  ): Promise<TraitMethod | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        display: true,
        id: true,
        method: true,
        sortFactor: true,
        totalPoints: true,
        types: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "TraitMethod",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: TraitMethod })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: TraitMethodWhereUniqueInput,
    @common.Body() data: TraitMethodUpdateInput
  ): Promise<TraitMethod | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          display: true,
          id: true,
          method: true,
          sortFactor: true,
          totalPoints: true,
          types: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "TraitMethod",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: TraitMethod })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: TraitMethodWhereUniqueInput
  ): Promise<TraitMethod | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          display: true,
          id: true,
          method: true,
          sortFactor: true,
          totalPoints: true,
          types: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
