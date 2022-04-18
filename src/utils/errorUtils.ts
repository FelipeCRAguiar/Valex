export function unauthorized() {
  return { 
          type: 'unauthorized',
          message: 'To do this request you must be authenticated.'
  }
}

export function badRequest() {
  return {
          type: 'bad_request',
          message: 'An error ocurred in your request'
  }
}

export function notFound() {
  return {
          type: 'not_found',
          message: 'Requested item was not found'
  }
}

export function conflict() {
  return {
          type: 'conflict',
          message: "There's already an existing item with those configurations"
  }
}