import React from 'react'
import { List } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { CiLock, CiUnlock } from 'react-icons/ci'
import { MdDeleteForever } from 'react-icons/md'

const PostItem = () => {
  const posts = useSelector(state => state.posts.posts)
  const dispatch = useDispatch()
  const removePost = id => {
    dispatch({
      type: 'REMOVE_POST',
      payload: id,
    })
  }
  const updPostModifier = (id, modifier) => {
    dispatch({
      type: 'UPD_POST_MODIFIER',
      payload: { id, modifier },
    })
  }
  return (
    <List
      className='demo-loadmore-list'
      itemLayout='horizontal'
      dataSource={posts}
      renderItem={item => (
        <List.Item style={{ padding: '10px' }}>
          <List.Item.Meta title={item.title} description={item.description} />
          {item.modifier === 'private' ? (
            <CiLock
              onClick={() => updPostModifier(item.id, 'public')}
              style={{ marginRight: 10 }}
              size={18}
              color='red'
            />
          ) : (
            <CiUnlock
              onClick={() => updPostModifier(item.id, 'private')}
              style={{ marginRight: 10 }}
              size={18}
              color='green'
            />
          )}
          <button
            disabled={item.modifier === 'private' ? true : false}
            style={{ border: 'none', background: 'transparent' }}
          >
            <MdDeleteForever
              style={{cursor: 'pointer'}}
              size={24}
              color={item.modifier === 'public' ? 'red' : 'lightgray'}
              onClick={() => removePost(item.id)}
            />
          </button>
        </List.Item>
      )}
    />
  )
}
export default PostItem
