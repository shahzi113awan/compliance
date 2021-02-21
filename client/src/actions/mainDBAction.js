import axios from 'axios'
export const Get = () => async (dispatch) => {
  try {
    let url = '/api/mdb'
    axios.get(url).then(
      (res) =>
        dispatch({
          type: 'GET_MDB',
          payload: res.data,
        }),
      console.log('res')
    )
  } catch {
    dispatch({
      type: 'Error',
    })
  }
}
