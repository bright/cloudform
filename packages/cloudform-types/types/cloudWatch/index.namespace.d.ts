import Alarm_ from './alarm';
import AnomalyDetector_ from './anomalyDetector';
import CompositeAlarm_ from './compositeAlarm';
import Dashboard_ from './dashboard';
import InsightRule_ from './insightRule';
import MetricStream_ from './metricStream';
export declare namespace CloudWatch {
    const Alarm: typeof Alarm_;
    const AnomalyDetector: typeof AnomalyDetector_;
    const CompositeAlarm: typeof CompositeAlarm_;
    const Dashboard: typeof Dashboard_;
    const InsightRule: typeof InsightRule_;
    const MetricStream: typeof MetricStream_;
    type Alarm = Alarm_;
    type AnomalyDetector = AnomalyDetector_;
    type CompositeAlarm = CompositeAlarm_;
    type Dashboard = Dashboard_;
    type InsightRule = InsightRule_;
    type MetricStream = MetricStream_;
}
