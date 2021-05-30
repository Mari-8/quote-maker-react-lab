import uuid from 'uuid'

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE': 
      
      return [
        ...state, 
        action.quote
      ]

    case 'REMOVE_QUOTE': 

      return [
        ...state.filter(quote => quote.id !== action.quoteId) 
      ]

    case 'UPVOTE_QUOTE': 
      const upThisQuote = state.find(quote => quote.id === action.quoteId)
        let thisQuoteUpvoted = {
          ...upThisQuote, 
          votes: upThisQuote.votes + 1
        }
        return [
          ...state.filter(quote => quote.id !== action.quoteId),
          thisQuoteUpvoted
        ]
    case 'DOWNVOTE_QUOTE': 
      const downThisQuote = state.find(quote => quote.id === action.quoteId)
      if (downThisQuote.votes > 0) {
        let thisQuoteDownvoted = {
          ...downThisQuote, 
          votes: downThisQuote.votes - 1
        }
        return [
          ...state.filter(quote => quote.id !== action.quoteId),
          thisQuoteDownvoted
        ]
      } else {
        let thisQuoteDownvoted = {
          ...downThisQuote,
          votes: 0
        }
        return [
          ...state.filter(quote => quote.id !== action.quoteId), 
          thisQuoteDownvoted 
        ]
      }
    default: 
      return state
  }
}
