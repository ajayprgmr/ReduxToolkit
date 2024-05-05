import { useDispatch, useSelector } from 'react-redux'
import {
  createTodo,
  deleteTodo,
  editTodo,
  markAsCompletedTodo,
} from '../features/todoSlice'

import { useState } from 'react'
import { nanoid } from 'nanoid'

const Todo = () => {
  const data = useSelector((state) => state.todos)
  const [inputTask, setInputTask] = useState('')
  const [edit, setEdit] = useState(false)
  // const [editTask, setEditTask] = useState('')
  const dispatch = useDispatch()

  const handleCreateTodo = () => {
    if (edit) {
      dispatch(editTodo({ id: edit, task: inputTask }))
      setEdit('')
      setInputTask('')
    } else {
      if (inputTask.trim() !== '') {
        dispatch(createTodo({ id: nanoid(), task: inputTask, status: false }))
        setInputTask('')
      }
    }
  }
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo({ id }))
  }

  const handleEditTodo = (id) => {
    setEdit(id)
  }

  const handleMarkAsCompleted = (id) => {
    dispatch(markAsCompletedTodo({ id }))
  }
  return (
    <div className='grid grid-cols-2'>
      <div className=''>
        <img
          src='https://cdni.iconscout.com/illustration/premium/thumb/todo-list-2839461-2371075.png'
          alt='TodoIcon'
          className='object-cover'
        />
      </div>

      <div className='min-h-80 flex flex-col justify-center items-start pl-2 gap-10 pt-10'>
        <div className='flex justify-center items-center gap-10'>
          <input
            type='text'
            value={inputTask}
            onChange={(e) => setInputTask(e.target.value)}
            placeholder='Enter Task here...'
            className='w-80 h-10 rounded-md border-2 border-red-300 pl-5'
          />
          <button
            className='rounded-md bg-red-300 px-5 h-10'
            onClick={handleCreateTodo}
          >
            {edit ? 'Update' : 'CreateTodo'}
          </button>
        </div>
        <div className='flex flex-col '>
          {data.map((todo) => {
            const { id, task, status } = todo
            return (
              <div key={id} className='grid grid-cols-2 py-2'>
                <div className='flex'>
                  <input
                    type='checkbox'
                    checked={status}
                    onChange={() => handleMarkAsCompleted(id)}
                    className=''
                  />
                  <p className={`pl-5 ${status ? 'line-through' : ''}`}>
                    {task}
                  </p>
                </div>
                <div className='flex gap-5 pl-5'>
                  <button
                    className='rounded-md bg-red-200 px-2'
                    onClick={() => handleDeleteTodo(id)}
                  >
                    DeleteTodo
                  </button>
                  <button
                    className='rounded-md bg-red-200 px-2'
                    onClick={() => {
                      setInputTask(task)
                      handleEditTodo(id)
                    }}
                  >
                    EditTodo
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Todo
