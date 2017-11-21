"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Model extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ApiGateway::Model', properties, dependsOn);
    }
}
exports.default = Model;
