import Dashboard_ from './dashboard';
import AnomalyDetector_ from './anomalyDetector';
import Alarm_ from './alarm';
export declare namespace CloudWatch {
    const Dashboard: typeof Dashboard_;
    const AnomalyDetector: typeof AnomalyDetector_;
    const Alarm: typeof Alarm_;
    type Dashboard = Dashboard_;
    type AnomalyDetector = AnomalyDetector_;
    type Alarm = Alarm_;
}
