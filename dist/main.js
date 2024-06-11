"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_config_1 = require("./configs/swagger.config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    (0, swagger_config_1.SwaggerConfiguration)(app);
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(3000, () => {
        console.log(`http://localhost:3000`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map