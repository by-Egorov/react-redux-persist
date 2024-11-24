import React from 'react'
import { FaSortAlphaDown, FaSortAlphaDownAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux'

const MySort = () => {
  const dispatch = useDispatch()
  const sortedPostUp = () => {
    dispatch({
      type: 'SORT_BY_NAME_UP',
    })
  }
  const sortedPostDown = () => {
    dispatch({
      type: 'SORT_BY_NAME_DOWN',
    })
  }
  return (
    <div
      style={{
        display: 'flex',
        padding: '10px',
        gap: '15px',
      }}
    >
      <FaSortAlphaDown
        color='#1677ff'
        size={18}
        cursor={'pointer'}
        onClick={() => sortedPostUp()}
      />
      <FaSortAlphaDownAlt
        color='#1677ff'
        size={18}
        cursor={'pointer'}
        onClick={() => sortedPostDown()}
      />
    </div>
  )
}

export default MySort
