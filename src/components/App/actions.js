export function deleteMessage(id) {
  return {
    type: 'DELETE_MESSAGE',
    id,
  }
}

export function addMessage(text, threadId) {
  return {
    type: 'ADD_MESSAGE',
    text,
    threadId,
  }
}

export function openThread(id) {
  return {
    type: 'OPEN_THREAD',
    id
  }
}