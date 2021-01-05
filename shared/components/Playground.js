
import React, {Component} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {CardContent, Paper} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import TopBard from "./TopBard";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import selectedRoom from "../../store/actions/SelectRoom";
import {connect} from "react-redux";

const useStyles = makeStyles({

});

class PlayGround extends Component{

    render() {
        console.log(this.props.room)
        const table = <div className={'playground'}>
            <Toolbar>
                <Typography variant="h6"  >
                    Tu turno
                </Typography>
            </Toolbar>
            <div className={'top'}>
                <div className={'d-flex h-100'}>
                    <div className={'avatar d-flex'}>
                        <div className={'info w-100'}>
                            <small>resta: {this.props.room.data.deck.length}</small>
                        </div>
                        <div className={'deck m-auto'}>

                        </div>


                    </div>
                    <div className={'cards d-flex flex-1 my-auto'}>
                        <div className={'m-auto d-flex justify-'}>
                            <div className={'play-card mx-1 '}> 1 </div>
                            <div className={'play-card  mx-1'}> 1 </div>
                            <div className={'play-card mx-1 '}> 1 </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={'right'}>
                <div className={'d-flex  h-100 flex-column'}>
                    <div className={'avatar-invert'}>

                    </div>
                    <div className={'cards d-flex flex-1 mx-auto'}>
                        <div className={'m-auto d-flex flex-column'}>
                            <div className={'play-card-invert  my-1'}> 1 </div>
                            <div className={'play-card-invert  my-1'}> 1 </div>
                            <div className={'play-card-invert my-1 '}> 1 </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className={'bottom'}>
                <div className={'d-flex h-100'}>

                    <div className={'cards d-flex flex-1 my-auto'}>
                        <div className={'m-auto d-flex justify-'}>
                            <div className={'play-card  mx-1'}> 1 </div>
                            <div className={'play-card  mx-1'}> 1 </div>
                            <div className={'play-card mx-1 '}> 1 </div>
                        </div>

                    </div>
                    <div className={'avatar'}>

                    </div>
                </div>
            </div>
            <div className={'left'}>
                <div className={'d-flex  h-100 flex-column'}>

                    <div className={'cards d-flex flex-1 mx-auto'}>
                        <div className={'m-auto d-flex flex-column'}>
                            <div className={'play-card-invert  my-1'}> 1 </div>
                            <div className={'play-card-invert  my-1'}> 1 </div>
                            <div className={'play-card-invert my-1 '}> 1 </div>
                        </div>

                    </div>
                    <div className={'avatar-invert'}>

                    </div>
                </div>
            </div>
            <div className={'board'}>
                <div className={'d-flex flex-1 h-50 justify-content-between'}>
                    <div className={'d-flex w-10 flex-1'}>
                        <div className={'play-card m-auto'}> 1 </div>
                    </div>
                    <div className={'d-flex w-10 flex-1'}>
                        <div className={'play-card m-auto'}> 2 </div>
                    </div>
                    <div className={'d-flex w-10 flex-1'}>
                        <div className={'play-card m-auto'}> 3 </div>
                    </div>
                    <div className={'d-flex w-10 flex-1'}>
                        <div className={'play-card m-auto'}> 4 </div>
                    </div>
                    <div className={'d-flex w-10 flex-1'}>
                        <div className={'play-card m-auto'}> 5 </div>
                    </div>
                    <div className={'d-flex w-10 flex-1'}>
                        <div className={'play-card m-auto'}> 6 </div>
                    </div>
                    <div className={'d-flex w-10 flex-1'}>
                        <div className={'play-card m-auto'}> 7 </div>
                    </div>
                    <div className={'d-flex w-10 flex-1'}>
                        <div className={'play-card m-auto'}> 8 </div>
                    </div>
                    <div className={'d-flex w-10 flex-1'}>
                        <div className={'play-card m-auto'}> 9 </div>
                    </div>
                    <div className={'d-flex w-10 flex-1'}>
                        <div className={'play-card m-auto'}> 0 </div>
                    </div>

                </div>
                <div className={'d-flex flex-1 h-50 justify-content-between'}>
                    <div className={'d-flex w-10 flex-1'}>
                        <div className={'play-card m-auto'}> 1 </div>
                    </div>
                    <div className={'d-flex w-10 flex-1'}>
                        <div className={'play-card m-auto'}> 2 </div>
                    </div>
                    <div className={'d-flex w-10 flex-1'}>
                        <div className={'play-card m-auto'}> 3 </div>
                    </div>
                    <div className={'d-flex w-10 flex-1'}>
                        <div className={'play-card m-auto'}> 4 </div>
                    </div>
                    <div className={'d-flex w-10 flex-1'}>
                        <div className={'play-card m-auto'}> 5 </div>
                    </div>
                    <div className={'d-flex w-10 flex-1'}>
                        <div className={'play-card m-auto'}> 6 </div>
                    </div>
                    <div className={'d-flex w-10 flex-1'}>
                        <div className={'play-card m-auto'}> 7 </div>
                    </div>
                    <div className={'d-flex w-10 flex-1'}>
                        <div className={'play-card m-auto'}> 8 </div>
                    </div>
                    <div className={'d-flex w-10 flex-1'}>
                        <div className={'play-card m-auto'}> 9 </div>
                    </div>
                    <div className={'d-flex w-10 flex-1'}>
                        <div className={'play-card m-auto'}> 0 </div>
                    </div>

                </div>


            </div>

        </div>
        const emptyBoard = <div className={'playground empty d-flex'}>
            <Toolbar>
                <Typography variant="h6"  >
                    Seleccione una sala
                </Typography>
            </Toolbar>
        </div>
        const render = this.props.room.data.id ?table : emptyBoard;
        return (
            <div  >
                {render}
            </div>
        );
    }


}
const mapStateToProps = (state) => {
    return {
        room: state.room
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        selectedRoom: (id) => dispatch(selectedRoom(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayGround);