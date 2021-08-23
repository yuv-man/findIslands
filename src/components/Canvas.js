import React, {useState, useEffect, useRef, useContext} from 'react'
import { CanvasContext } from '../libs/CanvasContext';
import { drawIsland } from '../libs/DrawIsland';
import { MatrixContext } from '../libs/MatrixContext';

const Canvas = ({children, isRandom}) => {

    const {rows, cols, TILE_SIZE, grid, setGrid} = useContext(MatrixContext)
    const canvasRef = useRef(null);
    const [ctx, setCtx] = useState(null);
    const width = TILE_SIZE*cols
    const height = TILE_SIZE*rows

    useEffect(() => {
        setCtx(canvasRef.current.getContext('2d'));
    }, []);

    useEffect(() => {
        if(canvasRef.current && grid && !isRandom){
            const canvas = canvasRef.current
            var elemLeft = canvas.offsetLeft;
            var elemTop = canvas.offsetTop;
            canvas.addEventListener('click', function(event) {
                const x = event.pageX - elemLeft;
                const y = event.pageY - elemTop;
                const c = Math.floor(x / TILE_SIZE)
                const r = Math.floor(y / TILE_SIZE)
                const matrix = drawIsland(grid, r, c, grid[r][c].num)
                setGrid(matrix)
            })
        }
    }, [setGrid])


    return (
        <CanvasContext.Provider value={{ctx}}>
            <canvas
                ref={canvasRef} 
                width={width} 
                height={height}
            />
            {children}
        </CanvasContext.Provider>
    );
}

export default Canvas
