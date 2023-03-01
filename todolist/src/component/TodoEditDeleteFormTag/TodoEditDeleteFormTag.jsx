import React from 'react'

const TodoEditDeleteFormTag = ({whatTodo}) => {
  return (
   
    
            <li>
                <label>
                    <input type="checkbox"/>
                    <span>{whatTodo}</span>
                </label>
                <button>수정</button>
                <button>삭제</button>
            </li>
       
   
    )
}

export default TodoEditDeleteFormTag
