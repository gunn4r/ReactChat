import uuid from 'uuid'

function messagesReducer(state = [], action) {
  switch (action.type) {

    case 'ADD_MESSAGE':
      const newMessage = {
        text: action.text,
        timestamp: Date.now(),
        id: uuid.v4(),
      }
      // new array of messages
      return state.concat(newMessage)

    case 'DELETE_MESSAGE':

      // New array of messages
      return state.filter((message) => (message.id !== action.id))

    default:
      return state

  }
}


const initialState = [
    {
      id: 1,
      title: 'Angel Beltran',
      messages: messagesReducer(undefined, {}),
    },
    {
      id: 2,
      title: 'Brady Killeen',
      messages: messagesReducer(undefined, {}),
    }
  ]

function findThreadIndex(threads, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return threads.findIndex(
        (t) => t.id === action.threadId
      );

    case 'DELETE_MESSAGE':
      return threads.findIndex(
        (t) => t.messages.find((m) => (
          m.id === action.id
        ))
      )
    default:
    return
  }
}

export default function threads(state = initialState, action) {
  switch (action.type) {

    case 'ADD_MESSAGE':
    case 'DELETE_MESSAGE':
      const threadIndex = findThreadIndex(state, action)
      const oldThread = state[threadIndex]
      const newThread = {
        ...oldThread,
        messages: messagesReducer(oldThread.messages, action),
      }

      return [
        ...state.slice(0, threadIndex),
        newThread,
        ...state.slice(threadIndex + 1, state.length),
      ]

    default:
      return state

  }
}
