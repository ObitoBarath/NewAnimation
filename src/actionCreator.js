import * as action from './actions'



export  const bugAdded = description => ({type : action.BUG_ADDED , payload : { description : description}})
export  const bugRemoved = id => ({type : action.BUG_REMOVED , payload : { id : id}})
export  const bugResolved = id => ({type : action.BUG_RESOLVED   , payload : { id : id}})