import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { LanguageController } from "../language.controller";
import { LanguageService } from "../language.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  bcp_47LanguageTag: "exampleBcp_47LanguageTag",
  dbValue: 42,
  description: "exampleDescription",
  id: "exampleId",
  languageName: "exampleLanguageName",
  linkedinUrn: 42.42,
  region: "exampleRegion",
};
const CREATE_RESULT = {
  bcp_47LanguageTag: "exampleBcp_47LanguageTag",
  dbValue: 42,
  description: "exampleDescription",
  id: "exampleId",
  languageName: "exampleLanguageName",
  linkedinUrn: 42.42,
  region: "exampleRegion",
};
const FIND_MANY_RESULT = [
  {
    bcp_47LanguageTag: "exampleBcp_47LanguageTag",
    dbValue: 42,
    description: "exampleDescription",
    id: "exampleId",
    languageName: "exampleLanguageName",
    linkedinUrn: 42.42,
    region: "exampleRegion",
  },
];
const FIND_ONE_RESULT = {
  bcp_47LanguageTag: "exampleBcp_47LanguageTag",
  dbValue: 42,
  description: "exampleDescription",
  id: "exampleId",
  languageName: "exampleLanguageName",
  linkedinUrn: 42.42,
  region: "exampleRegion",
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Language", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: LanguageService,
          useValue: service,
        },
      ],
      controllers: [LanguageController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /languages", async () => {
    await request(app.getHttpServer())
      .post("/languages")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /languages", async () => {
    await request(app.getHttpServer())
      .get("/languages")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /languages/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/languages"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /languages/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/languages"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  afterAll(async () => {
    await app.close();
  });
});
