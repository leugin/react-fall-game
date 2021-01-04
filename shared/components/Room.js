
import React, {Component} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';
import selectedRoom from "../../store/actions/SelectRoom";
import {connect} from "react-redux";


const useStyles = makeStyles({

});

class Room extends Component {

    constructor(props, context) {
        super(props, context);
        this.selectRoom = this.selectRoom.bind(this);
        console.log(this.props)

    }

    selectRoom(){

        this.props.selectedRoom(this.props.item.id)

    }
    isSelected(){
        return  this.props.room &&  this.props.room.data &&  this.props.room.data.id && this.props.room.data.id === this.props.item.id;
    }

    render() {
        const lockIcon = this.props.item.is_lock ?  <i className="fa fa-lock" /> :  <i className="fa fa-unlock" />;
        let className = 'room ';
        if (this.isSelected()) {
            className += 'selected';
        }
        return (
            <ListItem button className={className}>
                <div className={'px-2 pb-2 w-100'}  onClick={this.selectRoom}>
                    <div className={'d-flex justify-contenten-end text-right'}>
                    <span className={'ml-auto'}>
                        {lockIcon}

                    </span>
                    </div>
                    <div className="d-flex justify-content-between pb-2 ">
                        <div className={'d-flex flex-column'}>
                            <small>Nombre:</small>
                            <div>
                                <span className={'font-weight-bold'}>{this.props.item.name}</span>
                            </div>
                        </div>
                        <div className={'d-flex flex-column justify-content-start'}>
                            <small>Pais: </small>
                            <div>
                                <span className={'font-weight-bold'}>{this.props.item.name}</span>
                                <span className={'font-weight-bold'}>{this.props.item.country.name}</span>
                            </div>
                        </div>

                    </div>

                    <div className={'d-flex flex-column'}>
                        <small className={'font-weight-bold'}>Participantes:</small>
                        <div className={'d-flex flex-wrap'}>


                            { this.props.item.participants.map((item, index) => {
                                return <span key={index} >{item.name}</span>
                            })
                            }
                        </div>
                    </div>

                </div>
            </ListItem>

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

export default connect(mapStateToProps, mapDispatchToProps)(Room);
