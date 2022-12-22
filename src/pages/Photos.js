import React, { useContext } from "react"
import Image from "../components/Image"
import { Context } from "../context"
import { getClass } from "../utils"

const Photos = () => {
  const { allPhotos } = useContext(Context)

  const ImagesElements = allPhotos.map((v, i) => {
    return <Image key={v.id} img={v} className={getClass(i)} />
  })

  return <main className="photos">{ImagesElements}</main>
}

export default Photos
