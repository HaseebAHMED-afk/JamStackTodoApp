const axios = require('axios');
const dotenv = require('dotenv').config();


exports.handler = async (event) => {
    if(event.httpMethod !== 'POST'){
        return {
            statusCode: 405,
            err : JSON.stringify('Method not supported'),
        }
    }



const CREATE_TODO = `
mutation($title: String! , $user: String!){
    createTodo(data : {title: $title , user: $user , done: false}){
      _id
      title
      user
      done
    }
  }
`

const {data:{title,user}} = JSON.parse(event.body)


try {
    const {data} = await axios({
        url:"https://graphql.fauna.com/graphql",
        method: "POST",
        headers:{
            Authorization: `Bearer ${process.env.FAUNADB_SECRET}`
        },
        data:{
            query: CREATE_TODO,
            variables:{
                title,
                user,
                done: false
            }
        }

    })


    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
} catch (error) {
    console.error(error);
    return {
        statusCode:500,
        err: JSON.stringify('Something went wrong')
    }
}
}