import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { LanguageServiceBase } from "./base/language.service.base";

@Injectable()
export class LanguageService extends LanguageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
