"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerConfiguration = void 0;
const swagger_1 = require("@nestjs/swagger");
function SwaggerConfiguration(app) {
    const document = new swagger_1.DocumentBuilder()
        .setTitle("task-11-june")
        .setDescription("task restful api")
        .setVersion("v0.0.1")
        .build();
    const swaggerDocument = swagger_1.SwaggerModule.createDocument(app, document);
    swagger_1.SwaggerModule.setup("/swagger", app, swaggerDocument);
}
exports.SwaggerConfiguration = SwaggerConfiguration;
//# sourceMappingURL=swagger.config.js.map