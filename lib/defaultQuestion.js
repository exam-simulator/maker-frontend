export default () => {
  return {
    __typename: 'Question',
    variant: 0,
    id: '123',
    question: [{ __typename: 'QuestionNode', id: '1', variant: 1, text: '' }],
    choices: [
      { __typename: 'ChoiceNode', id: '1', label: 'A', text: '' },
      { __typename: 'ChoiceNode', id: '2', label: 'B', text: '' },
      { __typename: 'ChoiceNode', id: '3', label: 'C', text: '' },
      { __typename: 'ChoiceNode', id: '4', label: 'D', text: '' }
    ],
    answer: [false, false, false, false],
    explanation: [{ __typename: 'ExplanationNode', id: '1', variant: 1, text: '', href: '' }]
  }
}
