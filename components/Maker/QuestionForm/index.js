import styled from 'styled-components'
import { SubHeading } from '../styles/SubHeading'
import { Center } from '../styles/Center'
import NodeInput from '../NodeInput'
import SelectType from './SelectType'
import ChoiceInput from '../ChoiceInput'
import Label from '../MainForm/Label'
import AddQuestion from './AddQuestion'
import AddExplanation from './AddExplanation'
import AddAnswer from './AddAnswer'
import DeleteQuestion from './DeleteQuestion'

const QuestionFormStyles = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
`

export default React.memo(({ id, question, onDeleteQuestion }) => (
  <QuestionFormStyles>
    <Center>
      <SubHeading>
        <Label text="Question" />
        <AddQuestion examID={id} questionID={question.id} />
      </SubHeading>
      {question.question.map((q, i) => (
        <NodeInput key={q.id} id={id} type="question" index={i} node={q} />
      ))}
      <SubHeading>
        <Label text="Explanation" />
        <AddExplanation examID={id} questionID={question.id} />
      </SubHeading>
      {question.explanation.map((e, i) => (
        <NodeInput key={e.id} id={id} type="explanation" index={i} node={e} />
      ))}
    </Center>
    <Center>
      <SubHeading>
        <Label text="Type" />
        <SelectType id={id} questionID={question.id} variant={question.variant} />
      </SubHeading>
      <SubHeading>
        <Label text="Answer" />
        <AddAnswer examID={id} questionID={question.id} />
      </SubHeading>
      {question.choices.map((c, i) => (
        <ChoiceInput
          key={c.id}
          id={id}
          questionId={question.id}
          choice={c}
          answer={question.answer[i]}
          index={i}
          answers={question.answer}
          variant={question.variant}
        />
      ))}
      <SubHeading>
        <Label text="Delete" />
        <DeleteQuestion examID={id} questionID={question.id} onClick={onDeleteQuestion} />
      </SubHeading>
    </Center>
  </QuestionFormStyles>
))
