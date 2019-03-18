import styled from 'styled-components'
import { Center } from '../styles/Center'
import { SubHeading } from '../styles/SubHeading'
import Actions from './Actions'
import AddCover from './AddCover'
import NodeInput from '../NodeInput'
import Label from './Label'
import Title from './Title'
import Description from './Description'
import Code from './Code'
import Time from './Time'
import Pass from './Pass'
import Image from './Image'
import Media from '../../Page/Media'

const MainFormStyles = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  ${Media.tablet`
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  `};
`

const ExamProperties = styled.div`
  display: flex;
  flex-direction: column;
`

export default React.memo(
  ({
    user,
    id,
    published,
    verified,
    verificationPending,
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
          <Label text="Exam Properties" />
          <span />
        </SubHeading>
        <Actions
          user={user}
          id={id}
          published={published}
          verified={verified}
          verificationPending={verificationPending}
          onDownloadExam={onDownloadExam}
          onDeleteExam={onDeleteExam}
        />
        <ExamProperties>
          <Title id={id} title={title} onChange={onChange} />
          <Description id={id} description={description} onChange={onChange} />
          <Code id={id} code={code} onChange={onChange} />
          <Time id={id} time={time} onChange={onChange} />
          <Pass id={id} pass={pass} onChange={onChange} />
          <Image id={id} image={image} onChange={onChange} />
        </ExamProperties>
      </Center>
      <Center>
        <SubHeading>
          <Label text="Cover" />
          <AddCover id={id} />
        </SubHeading>
        {cover.map((n, i) => (
          <NodeInput key={n.id} type="cover" index={i} id={id} node={n} />
        ))}
      </Center>
    </MainFormStyles>
  )
)
