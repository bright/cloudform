"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.12.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const logGroup_1 = require("./logGroup");
const metricFilter_1 = require("./metricFilter");
const logStream_1 = require("./logStream");
const subscriptionFilter_1 = require("./subscriptionFilter");
const destination_1 = require("./destination");
exports.default = {
    LogGroup: logGroup_1.default,
    MetricFilter: metricFilter_1.default,
    LogStream: logStream_1.default,
    SubscriptionFilter: subscriptionFilter_1.default,
    Destination: destination_1.default
};
