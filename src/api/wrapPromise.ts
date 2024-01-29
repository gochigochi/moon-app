export const wrapPromise = (promise : string) => {
  
    let status = "pending"
    let response
  
    const suspender = promise.then(
      (res) => {
        status = "success"
        response = res
      },
      (err) => {
        status = "error",
        response = err
      },
    )
  
    return {
      read() {
  
        if (status === "pending") {
          throw suspender
        } else if (status === "error") {
          throw response
        } else if (status === "success") {
          return response
        }
      }
    }
  
  }