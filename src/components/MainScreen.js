import React, {useState, useContext} from 'react'
import {useHistory} from "react-router-dom"
import {MatrixContext} from '../libs/MatrixContext'
import {createMatrix} from '../libs/CreateMatrix'
import {FaRandom, FaPencilAlt} from 'react-icons/fa'
import {GiIsland} from 'react-icons/gi'
import '../styles/MainScreen.css'

function MainScreen() {

    const history = useHistory()
    const [value, setValue] = useState("")
    const {setRows, setCols, setGrid} = useContext(MatrixContext)

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (isRandom) => {
        const rowAndCol = value.split(',')
        setRows(rowAndCol[0])
        setCols(rowAndCol[1])
        const matrix = createMatrix(rowAndCol[0], rowAndCol[1], isRandom)
        setGrid(matrix)
        history.push('/matrix', isRandom)
    }

    return (
        <div>
          <div className='title'><GiIsland/> FIND THE ISLANDS <GiIsland/></div> 
          <div>
            <input className='input' type="text" placeholder="Bitmap size: n, m" value={value} onChange={handleChange}/>
          </div>
          <div>
            <button className='main-btn' onClick={() => handleSubmit(true)}><FaRandom size={15}/>Randomize</button> 
          </div>
          <button className='main-btn' onClick={() => handleSubmit(false)}><FaPencilAlt/>  Draw</button>
        </div>
    )
}

export default MainScreen
