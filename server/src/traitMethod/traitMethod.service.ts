import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { TraitMethodServiceBase } from "./base/traitMethod.service.base";

@Injectable()
export class TraitMethodService extends TraitMethodServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
