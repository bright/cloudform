import DataIntegration_ from './dataIntegration';
import EventIntegration_ from './eventIntegration';
export declare namespace AppIntegrations {
    const DataIntegration: typeof DataIntegration_;
    const EventIntegration: typeof EventIntegration_;
    type DataIntegration = DataIntegration_;
    type EventIntegration = EventIntegration_;
}
