import axios from "axios"

import { useState,useEffect } from "react"

import NavBar from "../../NavBar/NavBar"
import CoverMD from "../CoverMD/CoverMD"

import "./HomeMD.scss"

const HomeMd = () => {
  const [movie, setMovie] = useState({})

  useEffect(() => {
    axios.get("http://localhost:4000/api/movie").then((response) => {
      setMovie(response.data);
      console.log(response.data);
    });
  }, [])
  
  return (
    <div>
        <NavBar />
        <CoverMD />
    </div>
  )
}

export default HomeMd