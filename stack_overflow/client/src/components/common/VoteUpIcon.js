
import withOnClick from './withOnClick';
import {Icon} from 'semantic-ui-react';


export default withOnClick(
    Icon, 
    {
        name: 'angle up',
        style: {margin: '0'}
    },
    {color: 'grey'}, 
    {color: 'green'}
)
