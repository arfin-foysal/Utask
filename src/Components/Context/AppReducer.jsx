const AppReducer = (state,action) => {
      switch (action.type) {
          case "ADD_USER":
              return{
                  ...state
                  ,users:[...state.users,action.payload]
              }
          case "EDIT_USER":
              const updateuser=action.payload
              const updateUsersAll=state.users.map((user)=>{
                  if (user.id===updateuser.id) {
                      return updateuser;
                  }
                  return user 
              })
              return{
                  ...state,users:updateUsersAll
              }
              case "REMOVE_USER":
                  return{
                      users:state.users.filter(user=>user.id !==Number(action.payload))
                  }

              
            default:
              return state
      }
}

export default AppReducer
