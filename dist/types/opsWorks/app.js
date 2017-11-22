"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class DataSource extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::OpsWorks::DataSource', properties, dependsOn);
    }
}
exports.DataSource = DataSource;
class EnvironmentVariable extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::OpsWorks::EnvironmentVariable', properties, dependsOn);
    }
}
exports.EnvironmentVariable = EnvironmentVariable;
class SslConfiguration extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::OpsWorks::SslConfiguration', properties, dependsOn);
    }
}
exports.SslConfiguration = SslConfiguration;
class Source extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::OpsWorks::Source', properties, dependsOn);
    }
}
exports.Source = Source;
class App extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::OpsWorks::App', properties, dependsOn);
    }
}
exports.default = App;
