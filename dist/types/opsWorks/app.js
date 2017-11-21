"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class App extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::OpsWorks::App', properties, dependsOn);
    }
}
exports.default = App;
