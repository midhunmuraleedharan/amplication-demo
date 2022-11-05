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
import { LanguageService } from "../language.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { LanguageCreateInput } from "./LanguageCreateInput";
import { LanguageWhereInput } from "./LanguageWhereInput";
import { LanguageWhereUniqueInput } from "./LanguageWhereUniqueInput";
import { LanguageFindManyArgs } from "./LanguageFindManyArgs";
import { LanguageUpdateInput } from "./LanguageUpdateInput";
import { Language } from "./Language";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class LanguageControllerBase {
  constructor(
    protected readonly service: LanguageService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Language",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Language })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: LanguageCreateInput): Promise<Language> {
    return await this.service.create({
      data: data,
      select: {
        bcp_47LanguageTag: true,
        createdAt: true,
        dbValue: true,
        description: true,
        id: true,
        languageName: true,
        linkedinUrn: true,
        name: true,
        region: true,
        sortFactor: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Language",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Language] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(LanguageFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Language[]> {
    const args = plainToClass(LanguageFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        bcp_47LanguageTag: true,
        createdAt: true,
        dbValue: true,
        description: true,
        id: true,
        languageName: true,
        linkedinUrn: true,
        name: true,
        region: true,
        sortFactor: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Language",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Language })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: LanguageWhereUniqueInput
  ): Promise<Language | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        bcp_47LanguageTag: true,
        createdAt: true,
        dbValue: true,
        description: true,
        id: true,
        languageName: true,
        linkedinUrn: true,
        name: true,
        region: true,
        sortFactor: true,
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
    resource: "Language",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Language })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: LanguageWhereUniqueInput,
    @common.Body() data: LanguageUpdateInput
  ): Promise<Language | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          bcp_47LanguageTag: true,
          createdAt: true,
          dbValue: true,
          description: true,
          id: true,
          languageName: true,
          linkedinUrn: true,
          name: true,
          region: true,
          sortFactor: true,
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
    resource: "Language",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Language })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: LanguageWhereUniqueInput
  ): Promise<Language | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          bcp_47LanguageTag: true,
          createdAt: true,
          dbValue: true,
          description: true,
          id: true,
          languageName: true,
          linkedinUrn: true,
          name: true,
          region: true,
          sortFactor: true,
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
