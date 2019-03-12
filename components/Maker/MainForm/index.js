import styled from 'styled-components'
import { Center } from '../styles/Center'
import { SubHeading } from '../styles/SubHeading'
import Properties from './Properties'
import Actions from './Actions'
import AddCover from './AddCover'
import NodeInput from '../NodeInput'

const MainFormStyles = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
`

export default React.memo(
  ({
    id,
    published,
    title,
    description,
    code,
    time,
    pass,
    image,
    cover,
    onChange,
    onDownloadExam,
    onDeleteExam
  }) => (
    <MainFormStyles>
      <Center>
        <SubHeading>
          <span>Exam Properties</span>
          <span />
        </SubHeading>
        <Actions
          id={id}
          published={published}
          onDownloadExam={onDownloadExam}
          onDeleteExam={onDeleteExam}
        />
        <Properties
          id={id}
          title={title}
          description={description}
          code={code}
          time={time}
          pass={pass}
          image={image}
          cover={cover}
          onChange={onChange}
        />
      </Center>
      <Center>
        <SubHeading>
          <span>Cover Nodes</span>
          <AddCover id={id} />
        </SubHeading>
        {cover.map((n, i) => (
          <NodeInput key={n.id} type="cover" index={i} id={id} node={n} />
        ))}
      </Center>
    </MainFormStyles>
  )
)
