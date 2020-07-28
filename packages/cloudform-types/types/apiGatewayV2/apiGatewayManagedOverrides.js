"use strict";
/* Generated from:
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class StageOverrides {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StageOverrides = StageOverrides;
class RouteSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RouteSettings = RouteSettings;
class IntegrationOverrides {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.IntegrationOverrides = IntegrationOverrides;
class AccessLogSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AccessLogSettings = AccessLogSettings;
class RouteOverrides {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RouteOverrides = RouteOverrides;
class ApiGatewayManagedOverrides extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::ApiGatewayV2::ApiGatewayManagedOverrides', properties);
    }
}
exports.default = ApiGatewayManagedOverrides;
ApiGatewayManagedOverrides.StageOverrides = StageOverrides;
ApiGatewayManagedOverrides.RouteSettings = RouteSettings;
ApiGatewayManagedOverrides.IntegrationOverrides = IntegrationOverrides;
ApiGatewayManagedOverrides.AccessLogSettings = AccessLogSettings;
ApiGatewayManagedOverrides.RouteOverrides = RouteOverrides;
