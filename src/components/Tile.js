import {useContext} from 'react';
import {CanvasContext} from '../libs/CanvasContext';
import { MatrixContext } from '../libs/MatrixContext';

const Tile = ({grid}) => {
    const {ctx} = useContext(CanvasContext);
    const {rows, cols, TILE_SIZE} = useContext(MatrixContext)

    const tileColor = (item) => {
        let colorNum =''
        let randomNum = 0
        if(typeof item === 'string'){
            const islandNum = item.split('-')[1]
            if(islandNum > 9){
                randomNum = (Math.floor(islandNum*167772).toString(16));
            } else {
                randomNum = (Math.floor(islandNum*1677721).toString(16));
            }
            colorNum = '#' + randomNum
        } else {
            colorNum = 'black'
        }
        console.log(colorNum)
        return colorNum
    }

    if(ctx){
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const item = grid[i][j].num;
                if (!item) {
                    // empty tile
                    continue;
                }              
                const x = j * TILE_SIZE;
                const y = i * TILE_SIZE;
                ctx.fillStyle = tileColor(item)
                ctx.fillRect(x,
                    y,
                    TILE_SIZE,
                    TILE_SIZE,) 
            }
        }
    }
    
    return null;
};
export default Tile;