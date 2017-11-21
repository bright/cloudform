"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Fleet extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::GameLift::Fleet', properties, dependsOn);
    }
}
exports.default = Fleet;
