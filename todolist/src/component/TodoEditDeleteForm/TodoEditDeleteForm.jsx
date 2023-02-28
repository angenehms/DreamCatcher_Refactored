import React from 'react'

const TodoEditDeleteForm = () => {
  return (
    <ul>
        <li>
            <label>
                <input type="checkbox"/>
                <span>Assignment</span>
            </label>
            <button>수정</button>
            <button>삭제</button>
        </li>
    </ul>
  )
}

export default TodoEditDeleteForm
