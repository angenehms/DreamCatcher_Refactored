import React from 'react'

const TodoSubmitCancelForm = () => {
  return (
    <ul>
        <li>
            <label>
                <input type="checkbox"/>
                <input type="text"/>
            </label>
            <button>제츨</button>
            <button>취소</button>
        </li>
    </ul>
  )
}

export default TodoSubmitCancelForm
