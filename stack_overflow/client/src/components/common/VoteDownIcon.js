
import withOnClick from './withOnClick';
import {Icon} from 'semantic-ui-react';


export default withOnClick(
    Icon, 
    {
        name: 'angle down',
        style: {margin: '0'}
    },
    {color: 'grey'}, 
    {color: 'red'}
)