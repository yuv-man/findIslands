import React, {useState, useContext} from 'react'
import {useHistory} from "react-router-dom"
import {MatrixContext} from '../libs/MatrixContext'
import {createMatrix} from '../libs/CreateMatrix'
import '../styles/MainScreen.css'

function MainScreen() {

    const history = useHistory()
    const [value, setValue] = useState("")
    const {setRows, setCols, setGrid} = useContext(MatrixContext)

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e, isRandom) => {
        e.preventDefault()
        const rowAndCol = value.split(',')
        setRows(rowAndCol[0])
        setCols(rowAndCol[1])
        const matrix = createMatrix(rowAndCol[0], rowAndCol[1], isRandom)
        setGrid(matrix)
        history.push('/matrix', isRandom)
    }

    return (
        <div>
          <div className='title'>Welcome to the Find Islands Game</div> 
          <div>
            <input className='input' type="test" placeholder="Bitmap size: n, m" value={value} onChange={handleChange}/>
          </div>
          <div>
            <button className='button' onClick={(e) => handleSubmit(e, true)}>Randomize</button> 
          </div>
          <button className='button' onClick={(e) => handleSubmit(e, false)}>Draw</button>
        </div>
    )
}

export default MainScreen
