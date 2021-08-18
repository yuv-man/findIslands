import React, {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {MatrixContext} from '../libs/MatrixContext'
import '../styles/Matrix.css'
import Game from './Game'
import {numOfIslands} from '../libs/CountIslands'

function Matrix() {

    const {rows, cols, grid, setGrid} = useContext(MatrixContext)
    const [islands, setIslands] = useState()
    const history = useHistory()
    const isRandom = history.location.state

    const goBack = (e) => {
        e.preventDefault()
        history.push('/')
    }

    const findIslands = () => {
        const result = numOfIslands(grid, rows, cols)
        setIslands(result[0])
        setGrid(result[1])
    }

    return (
        <div>
            <div className='islandsTitle'>The Islands</div>
            <Game grid={grid} isRandom={isRandom}/>
            {islands && <div>There are {islands} islands</div>}
            <button className='matrix-btn' onClick={findIslands}>Find Islands</button>
            <button className='matrix-btn' onClick={goBack}>back to main</button>
        </div>
    )
}

export default Matrix
