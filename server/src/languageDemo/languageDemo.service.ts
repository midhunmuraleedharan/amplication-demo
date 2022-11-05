import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { LanguageDemoServiceBase } from "./base/languageDemo.service.base";

@Injectable()
export class LanguageDemoService extends LanguageDemoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
