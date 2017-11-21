"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Destination extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Logs::Destination', properties, dependsOn);
    }
}
exports.default = Destination;
