import React, {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {MatrixContext} from '../libs/MatrixContext'
import '../styles/Matrix.css'
// import Game from './Game'
import {numOfIslands} from '../libs/CountIslands'
import {GiIsland} from 'react-icons/gi'
import {FaSearch, FaArrowLeft} from 'react-icons/fa'
import Tile from './Tile'
import Grid from './Grid'
import Canvas from './Canvas'

function Matrix() {

    const {rows, cols, grid, setGrid, TILE_SIZE} = useContext(MatrixContext)
    const [islands, setIslands] = useState()
    const history = useHistory()
    const isRandom = history.location.state

    const goBack = () => {
        history.push('/')
    }

    const findIslands = () => {
        const result = numOfIslands(grid, rows, cols)
        setIslands(result[0])
        setGrid(result[1])
    }

    return (
        <div>
            <div className='islandsTitle'>The Islands   <GiIsland/></div>
            {/* <Game className='game' grid={grid} isRandom={isRandom}/> */} (// the previous game without canvas//)
            <div>
                <Canvas isRandom={isRandom}>
                    <Grid width={cols*TILE_SIZE} height={rows*TILE_SIZE}>
                        <Tile grid={grid}/>
                    </Grid>
                </Canvas>    
            </div>
            {islands && <div>There are {islands} islands</div>}
            <div>
                <button className='matrix-btn' onClick={findIslands}><FaSearch/> Find islands</button>
            </div>
            <button className='matrix-btn' onClick={goBack}><FaArrowLeft size={10}/>  back to main</button>
        </div>
    )
}

export default Matrix
