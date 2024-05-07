import { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import {
  addByAmount,
  decrement,
  increment,
} from '../features/counter/counterSlice'
const couter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  // console.log(input)

  const handleAsyncAdd = () => {
    // Disable the button before dispatching the action
    const targetBtn = document.getElementById('asyncbtn')
    targetBtn.disabled = true

    setTimeout(() => {
      // Dispatch the action after a delay
      dispatch(addByAmount({ value: input }))

      // Enable the button after the action has been dispatched
      targetBtn.disabled = false
    }, 2000)
  }
  return (
    <div className='flex flex-col justify-center items-center gap-10 pt-10 text-white'>
      <div>
        <h1 className='text-red-500 text-7xl '>
          CounterApp Using ReduxToolkit
        </h1>
      </div>
      <div className='flex flex-col gap-20 pt-20'>
        <div className='flex gap-10  '>
          <button
            className='text-7xl font-semibold bg-red-400  rounded-sm flex justify-center items-center'
            onClick={() => dispatch(increment({ value: 1 }))}
          >
            <FaPlus />
          </button>
          <p className='text-7xl  flex justify-center items-center'>{count}</p>
          <button
            className='text-7xl font-semibold bg-red-400  rounded-sm flex justify-center items-center'
            onClick={() => dispatch(decrement({ value: 1 }))}
          >
            <FaMinus />
          </button>
        </div>
        <div>
          <div className='flex gap-10'>
            <input
              type='number'
              value={input}
              className='border-2 border-red-400 rounded-sm text-red-400 text-3xl w-40 pl-5 '
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className='h-20  w-fit px-10 text-3xl font-semibold bg-red-400  rounded-sm flex justify-center items-center'
              onClick={() => dispatch(addByAmount({ value: input }))}
            >
              addByAmount
            </button>
            <button
              className='h-20 w-fit px-10 text-3xl font-semibold bg-red-400 rounded-sm flex justify-center items-center'
              onClick={handleAsyncAdd}
              id='asyncbtn'
            >
              AddByAsync
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default couter
