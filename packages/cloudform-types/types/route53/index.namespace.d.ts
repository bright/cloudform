import RecordSet_ from './recordSet';
import HostedZone_ from './hostedZone';
import HealthCheck_ from './healthCheck';
import RecordSetGroup_ from './recordSetGroup';
export declare namespace Route53 {
    const RecordSet: typeof RecordSet_;
    const HostedZone: typeof HostedZone_;
    const HealthCheck: typeof HealthCheck_;
    const RecordSetGroup: typeof RecordSetGroup_;
    type RecordSet = RecordSet_;
    type HostedZone = HostedZone_;
    type HealthCheck = HealthCheck_;
    type RecordSetGroup = RecordSetGroup_;
}
