import React from 'react'
import Row from './Row'
import Cell from './Cell'

export default function Game(props) {

    const {grid, isRandom} = props
    return (
        <div>
            <div className='grid'>
                {grid.map((row, ri) => (
                    <Row key={ri}>
                    {row.map(({id, num}) => <Cell key={id} num={num} id={id} isRandom={isRandom}/>)}
                    </Row>
                ))}    
            </div>
        </div>
    )
}
