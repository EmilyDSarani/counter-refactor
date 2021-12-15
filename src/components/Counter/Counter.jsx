import { useEffect, useState, useReducer } from 'react'

const pinkRGB = `rgb(236, 72, 153)`


// reduce is handling the counter
// Reducer Function goes here
// //- you use a switch statement to update a state inside a reducer.
// - this is usually the only time it comes up
// - after you call SWITCH, it will take in some value, and then it determine which CASE it will go to
// - default is like the else, it is the last statement if there is nothing else. 
// - ALL ACTIONS HAVE TO HAVE A TYPE
function countReducer(count, action){
  switch(action.type){
    case 'increment': {
      return count + 1
    }
    case 'decrement' : {
      return count - 1
    }
    case 'reset' : {
      return 0
    }
  }
  // you have to return count at the end of this.... do we need to put a default somewhere?
  return count
}


export default function Counter() {
  // const [count, setCount] = useState(0)
  const [currentColor, setCurrentColor] = useState(pinkRGB)
// count is our state, dispatch is our setSet, the countReducer is how we update state, and 0 is initial 
  const [count, dispatch] = useReducer(countReducer, 0)


// oops, deleted useEffect, it probably needed to go here?


// we dont need to put count in here because we are already calling it in state above. 
// then below you will call it for each of the parts
  const handleIncreCount = () =>{
   dispatch({
     type: 'increment',
     
   })
  }
  const handleDecreCount = () =>{
    dispatch({
      type: 'decrement',
      
    })
   }
   const handleResetCount = () =>{
    dispatch({
      type: 'reset',
      
    })
   }
   

  return (
    <main className="bg-black bg-opacity-90 min-h-screen flex flex-col items-center justify-center text-4xl text-pink-500">
      <h1 className="mb-5" style={{ color: currentColor }}>
        {count.count}
      </h1>
      <div className="flex w-1/2 justify-around">
        <button
          className="text-green-400 border-2 border-green-400 p-3"
          type="button"
          onClick={handleIncreCount}
          aria-label="increment"
        >
          Increment
        </button>
        <button
          className="text-red-500 border-2 border-red-500 p-2"
          type="button"
          onClick={handleDecreCount}
          aria-label="decrement"
        >
          Decrement
        </button>
        <button
          className="text-pink-500 border-2 border-pink-500 p-2"
          type="button"
          aria-label="reset"
          onClick={handleResetCount}
        >
          Reset
        </button>
      </div>
    </main>
  )
}
