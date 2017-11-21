"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class SizeConstraintSet extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::WAFRegional::SizeConstraintSet', properties, dependsOn);
    }
}
exports.default = SizeConstraintSet;
