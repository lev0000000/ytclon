import React from 'react'
import type { PropsUrl, Params } from '@/app/models/types'


const page = async({params} : PropsUrl<Params<'videoId'>>) => {
  const data  = await params
  console.log(data)
  return (
    <div>page</div>
  )
}

export default page;