import ValueMetric from './components/Metrics/ValueMetric'
import TrendMetric from './components/Metrics/TrendMetric'
import TableMetric from './components/Metrics/TableMetric'
import ProgressMetric from './components/Metrics/ProgressMetric'
import PartitionMetric from './components/Metrics/PartitionMetric'

Nova.booting((app, store) => {
  app.component('value-metric', ValueMetric)
  app.component('trend-metric', TrendMetric)
  app.component('table-metric', TableMetric)
  app.component('progress-metric', ProgressMetric)
  app.component('partition-metric', PartitionMetric)
})
