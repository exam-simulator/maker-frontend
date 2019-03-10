import { SchemaBlock, SchemaPre } from './styles/SchemaJSON'
import schema from './data/schema'

export default () => (
  <SchemaBlock>
    <div className="block-top">
      <div>exam.json</div>
      <div>version 0.0.0</div>
    </div>
    <SchemaPre>{schema}</SchemaPre>
  </SchemaBlock>
)
