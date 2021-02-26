const axios = require('axios');
const dotenv = require('dotenv').config();


exports.handler = async (event) => {
    

const GET_TODOS = `
query($user: String!){
    getTodosByUser(user : $user){
      data{
        _id
        title
        done
        user
      }
    }
  }
`

const {variables} = JSON.parse(event.body)


try {
    const { data } = await axios({
        url:"https://graphql.fauna.com/graphql",
        method: "POST",
        headers:{
            Authorization: `Bearer ${process.env.FAUNADB_SECRET}`
        },
        data:{
            query: GET_TODOS,
            variables:{
                user: variables.user
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