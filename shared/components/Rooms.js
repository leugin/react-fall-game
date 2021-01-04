
import React, {Component} from 'react';

import Drawer from '@material-ui/core/Drawer';

import Room from '../components/Room'
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import {connect} from "react-redux";
import findRooms from '../../store/actions/FindRooms'
class Rooms extends Component {


    constructor(props) {
        super(props);
        this.props.findRooms()
    }
    render() {
        return(
            <React.Fragment  >
                <Drawer anchor={'left'} open={true}   variant={"permanent"}>
                    <Toolbar>
                        <Typography variant="h6"  >
                            Salas {this.props.rooms.data.length}
                        </Typography>
                    </Toolbar>

                    <List component="nav" aria-label="main mailbox folders" className={'room'}>
                        {
                            this.props.rooms.data.map((item, index)=> {
                                return <Room  key={index} item={item}/>
                            } )
                        }

                    </List>
                </Drawer>
            </React.Fragment>

        )
    }
}


const mapStateToProps = (state) => {
    return {
        rooms: state.rooms
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        findRooms: (params) => dispatch(findRooms(params))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
