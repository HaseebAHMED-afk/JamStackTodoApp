import React, { useState, useContext } from "react"
import { IdentityContext } from "../../identity-context"
import Nav from "./Nav"
import "../style.css"
import Button from "@material-ui/core/Button"
import axios from "axios"
import { gql, useQuery } from "@apollo/client"

const GET_TODOS = gql`
  query($user: String!) {
    getTodosByUser(user: $user) {
      _id
      title
      done
      user
    }
  }
`

const Dashboard = () => {
  const { user } = useContext(IdentityContext)

  const userName = user.user_metadata.full_name

  const [text, setText] = useState("")

  const { data, refetch } = useQuery(GET_TODOS, {
    variables: {
      user: userName,
    },
  })

  console.log(data);

  return (
    <div className="app">
      <Nav />
      <h1 className="main-heading">Todo List</h1>
      <div className="input-area">
        <input
          type="text"
          className="input"
          placeholder="What's the plan today????"
          value={text}
          onChange={e => {
            setText(e.target.value)
          }}
        />
        <Button
          onClick={async e => {
            e.preventDefault()
            await axios.post("/.netlify/functions/addTodo", {
              data: {
                title: text,
                user: userName,
              },
            })
            setText("")
            refetch()
          }}
          variant="contained"
          color="primary"
        >
          Add
        </Button>
      </div>
      <ul>
        {data &&
          data.getTodosByUser.data.map((task, i) => {
            return (<li
              onClick={async e => {
                e.preventDefault()
                await axios.delete("/.netlify/functions/deleteTodo", {
                  data: {
                    id: task._id,
                  },
                })
                refetch()
              }}
              className="task"
              key={i}
            >
              <span className="task-text">{task.title}</span>
              <span className="delete-btn">❌</span>
            </li>)
          })}
      </ul>
    </div>
  )
}

export default Dashboard
