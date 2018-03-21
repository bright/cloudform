"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeletionPolicies {
}
DeletionPolicies.Delete = 'Delete';
DeletionPolicies.Retain = 'Retain';
DeletionPolicies.Snapshot = 'Snapshot';
exports.DeletionPolicies = DeletionPolicies;
class ResourceBase {
    constructor(type, properties) {
        this.Type = type;
        this.Properties = properties;
    }
    dependsOn(dependencies) {
        this.DependsOn = dependencies;
        return this;
    }
    metadata(metadata) {
        this.Metadata = metadata;
        return this;
    }
    creationPolicy(policy) {
        this.CreationPolicy = policy;
        return this;
    }
    deletionPolicy(policy) {
        this.DeletionPolicy = policy;
        return this;
    }
    updatePolicy(policy) {
        this.UpdatePolicy = policy;
        return this;
    }
    condition(condition) {
        this.Condition = condition;
        return this;
    }
}
exports.ResourceBase = ResourceBase;
class ResourceTag {
    constructor(Key, Value) {
        this.Key = Key;
        this.Value = Value;
    }
}
exports.ResourceTag = ResourceTag;
