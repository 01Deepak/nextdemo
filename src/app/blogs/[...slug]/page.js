import React from 'react'

const page = (params) => {
  console.log('router = ',params);
  console.log('hello');
  const slug = params.params.slug
  return (
    <>
    <div>this is slug page</div>
    <p>your slug is = {slug}</p>
    {
      slug.map((item) => {
        return(
          <>
          <p>{item}</p>
          </>
        )
      })
    }
    </>

  )
}

export default page