import React from 'react';
import { Header } from 'semantic-ui-react'
import Timer from './Timer'
import TimerForm from './TimerForm';

class EditableTimer extends React.Component {
    state = {
        displayEdit: false,
    }

    _toogleDisplayEdit = () => {
        //debugger
        this.setState({ displayEdit: !this.state.displayEdit }, () => {
            console.log('this._toogleDisplayEdit isOpen=' + this.state.displayEdit)
        })
    }

    _onEditClick = (data) => {
        // Mettre a jour les nouvelles data avec les anciennes
        this.setState({ displayEdit: !this.state.displayEdit }, () => {
            console.log('this._editTimer isOpen=' + this.state.displayEdit)
        })
    }

    _handleEditClick = (data) => {
        const { onEditClick } = this.props
        onEditClick(data);
        this.setState({ displayEdit: !this.state.displayEdit }, () => {
            console.log('this._editTimer isOpen=' + this.state.displayEdit)
        })
        console.log('timer edited =' + JSON.stringify(data))
    }

    _onTrashClick = (timer) => {
        console.log('trash timer')
        const { onTrashClick } = this.props
        onTrashClick(timer)
    }

    _onStartClick = (timer) => {
        const { onStartClick } = this.props
        onStartClick(timer)
    }

    _onStopClick = (timer) => {
        const { onStopClick } = this.props
        onStopClick(timer)
    }



    render() {
        const { timer } = this.props;
        if (this.state.displayEdit) {
            return (
                <TimerForm projectOptions={this.props.projectOptions} onAddOptionClick={this.props.onAddOptionClick} timer={timer} handleAction={this._handleEditClick} handleClose={this._toogleDisplayEdit}></TimerForm>
            );
        }
        else {
            return (
                <Timer onStartClick={this._onStartClick} onStopClick={this._onStopClick} onEditClick={this._onEditClick} onTrashClick={this._onTrashClick} timer={timer}></Timer>
            );
        }
    }
}

export default EditableTimer