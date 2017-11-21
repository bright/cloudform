"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class OnPremisesInstanceTagFilter extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CodeDeploy::OnPremisesInstanceTagFilter', properties, dependsOn);
    }
}
exports.default = OnPremisesInstanceTagFilter;
