import React, { useState } from 'react'
import { Button, Form, Input, Modal, Radio } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { CiLock, CiUnlock } from 'react-icons/ci'

const MyModal = () => {
  const posts = useSelector(state => state.posts.posts)
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  const [open, setOpen] = useState(false)
  const onCreate = values => {
    const timestamp = Date.now()
    const date = new Date(timestamp)

    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    dispatch({
      type: 'ADD_POST',
      payload: {
        ...values,
        id: timestamp,
        date: `${day}/${month}/${year}`,
      },
    })
    setOpen(false)
  }
  return (
    <>
      <Button type='primary' onClick={() => setOpen(true)}>
        New Post
      </Button>
      <Modal
        open={open}
        title='Create a new collection'
        okText='Create'
        cancelText='Cancel'
        okButtonProps={{
          autoFocus: true,
          htmlType: 'submit',
        }}
        onCancel={() => setOpen(false)}
        destroyOnClose
        modalRender={dom => (
          <Form
            layout='vertical'
            form={form}
            name='form_in_modal'
            initialValues={{
              modifier: 'public',
            }}
            clearOnDestroy
            onFinish={values => onCreate(values)}
          >
            {dom}
          </Form>
        )}
      >
        <Form.Item
          name='title'
          label='Заголовок'
          rules={[
            {
              required: true,
              message: 'Please input the title of collection!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='description'
          label='Описание'
          rules={[
            {
              required: true,
              message: 'Please input the description of collection!',
            },
          ]}
        >
          <Input type='textarea' />
        </Form.Item>
        <Form.Item
          name='modifier'
          className='collection-create-form_last-form-item'
        >
          <Radio.Group>
            <Radio value='public'>
              <CiUnlock style={{ marginRight: 10 }} size={18} color='green' />
            </Radio>
            <Radio value='private'>
              {' '}
              <CiLock style={{ marginRight: 10 }} size={18} color='red' />
            </Radio>
          </Radio.Group>
        </Form.Item>
      </Modal>
    </>
  )
}
export default MyModal
