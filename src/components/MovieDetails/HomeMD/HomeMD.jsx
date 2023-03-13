import axios from "axios"

import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"

import NavBar from "../../NavBar/NavBar"
import CoverMD from "../CoverMD/CoverMD"

import "./HomeMD.scss"

const HomeMd = () => {

  return (
    <div>
        <NavBar />
        <CoverMD />
    </div>
  )
}

export default HomeMd