import RecordSet_ from './recordSet';
import HostedZone_ from './hostedZone';
import RecordSetGroup_ from './recordSetGroup';
import HealthCheck_ from './healthCheck';
export declare namespace Route53 {
    const RecordSet: typeof RecordSet_;
    const HostedZone: typeof HostedZone_;
    const RecordSetGroup: typeof RecordSetGroup_;
    const HealthCheck: typeof HealthCheck_;
    type RecordSet = RecordSet_;
    type HostedZone = HostedZone_;
    type RecordSetGroup = RecordSetGroup_;
    type HealthCheck = HealthCheck_;
}
