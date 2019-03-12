import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import { Add } from 'styled-icons/material/Add'
import { Delete } from 'styled-icons/material/Delete'
import { createNode } from '../../apollo/mutation/createNode'
import { deleteQuestion } from '../../apollo/mutation/deleteQuestion'
import { examById } from '../../apollo/query/exam'
import { SubHeading } from './styles/SubHeading'
import { Center } from './styles/Center'
import { Action } from './MainForm/Actions'
import NodeInput from './NodeInput'
import Type from './Type'
import ChoiceInput from './ChoiceInput'

const QuestionFormStyles = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
`

export default React.memo(({ id, question, onDeleteQuestion }) => (
  <QuestionFormStyles>
    <Center>
      <SubHeading>
        <span>Question</span>
        <Mutation
          mutation={createNode}
          variables={{ id: question.id, type: 'question' }}
          refetchQueries={[{ query: examById, variables: { id } }]}
        >
          {(createNode, { loading }) => (
            <span className="add" onClick={async () => await createNode()}>
              <Add size={15} />
            </span>
          )}
        </Mutation>
      </SubHeading>
      {question.question.map((q, i) => (
        <NodeInput key={q.id} id={id} type="question" index={i} node={q} />
      ))}
      <SubHeading>
        <span>Explanation</span>
        <Mutation
          mutation={createNode}
          variables={{ id: question.id, type: 'explanation' }}
          refetchQueries={[{ query: examById, variables: { id } }]}
        >
          {(createNode, { loading }) => (
            <span className="add" onClick={async () => await createNode()}>
              <Add size={15} />
            </span>
          )}
        </Mutation>
      </SubHeading>
      {question.explanation.map((e, i) => (
        <NodeInput key={e.id} id={id} type="explanation" index={i} node={e} />
      ))}
    </Center>
    <Center>
      <SubHeading>
        <span>Type</span>
        <Type id={id} question={question} />
      </SubHeading>
      <SubHeading>
        <span>Answer</span>
        <Mutation
          mutation={createNode}
          variables={{ id: question.id, type: 'choices' }}
          refetchQueries={[{ query: examById, variables: { id } }]}
        >
          {(createNode, { loading }) => (
            <span className="add" onClick={async () => await createNode()}>
              <Add size={15} />
            </span>
          )}
        </Mutation>
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
        <span>Delete</span>
        <Mutation
          mutation={deleteQuestion}
          variables={{ id: question.id }}
          refetchQueries={[{ query: examById, variables: { id } }]}
        >
          {(deleteQuestion, { loading }) => (
            <Action onClick={() => onDeleteQuestion(deleteQuestion)}>
              <Delete size={20} />
            </Action>
          )}
        </Mutation>
      </SubHeading>
    </Center>
  </QuestionFormStyles>
))
