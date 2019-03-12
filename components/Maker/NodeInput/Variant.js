import { Mutation } from 'react-apollo'
import { examById } from '../../../apollo/query/exam'
import { updateNode } from '../../../apollo/mutation/updateNode'
import { Image } from 'styled-icons/material/Image'
import { Title } from 'styled-icons/material/Title'
import { Option } from '../styles/NodeInput'

export default React.memo(({ id, variant, onClick }) => (
  <Mutation mutation={updateNode} refetchQueries={[{ query: examById, variables: { id } }]}>
    {(updateNode, { loading }) => (
      <div className="variants">
        <Option highlight={variant === 2} onClick={() => onClick(updateNode, 2)}>
          <Title size={20} />
        </Option>
        <Option highlight={variant === 1} onClick={() => onClick(updateNode, 1)}>
          <Title size={13} />
        </Option>
        <Option highlight={variant === 0} onClick={() => onClick(updateNode, 0)}>
          <Image size={15} />
        </Option>
      </div>
    )}
  </Mutation>
))
