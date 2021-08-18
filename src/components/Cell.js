import React, {useState, useContext} from 'react'
import { MatrixContext } from '../libs/MatrixContext'
import '../styles/Cell.css'

export default function Cell({num, id, isRandom}) {

    const [number, setNumber] = useState(num)
    const {grid, setGrid} = useContext(MatrixContext)

    let colorNum
    const r = id[0]
    const c = id[1]
    
    //color each island in different color
    if(typeof num === 'string'){
        const islandNum = num.split('-')[1]
        const randomNum = (Math.floor(islandNum*1677721).toString(16));
        colorNum = '#' + randomNum
    }

    //manually draw islands
    const drawIsland = () => {
        if(!isRandom){
            let matrix = grid
            if(number === 0){
                matrix[r][c].num = 1
                setNumber(1)
            } else {
                matrix[r][c].num = 0
                setNumber(0)
            }
            setGrid(matrix)   
        }
    }

    return (
        <div style={colorNum?{backgroundColor: colorNum}:null} className={`cell ${number?"island":""}`}  id={id} onClick={drawIsland}/>  
    )
}
