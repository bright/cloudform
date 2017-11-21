"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class LaunchConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::AutoScaling::LaunchConfiguration', properties, dependsOn);
    }
}
exports.default = LaunchConfiguration;
