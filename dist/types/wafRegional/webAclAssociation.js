"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class WebACLAssociation extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::WAFRegional::WebACLAssociation', properties, dependsOn);
    }
}
exports.default = WebACLAssociation;
