export default function activeThreadId(state = 1, action) {
  switch (action.type) {

    case 'OPEN_THREAD':
      return action.id

    default:
      return state

  }
}
