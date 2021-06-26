import React from 'react';
import { Header, Icon, Button } from 'semantic-ui-react'
import TimerForm from './TimerForm';

class ToggleableTimerForm extends React.Component {

    state = {
        isOpen: false
    }

    _toogleIsOpen = () => {
        //debugger
        this.setState({ isOpen: !this.state.isOpen }, () => {
            console.log('this._toogleIsOpen isOpen=' + this.state.isOpen)
        })
    }


    _handleAction = (data) => {
        const { onCreateClick } = this.props
        onCreateClick(data)
        this.setState({ isOpen: !this.state.isOpen }, () => {
            console.log('_handleAction =' + this.state.isOpen)
        })
    }

    _onAddOptionClick = (option) => {
        const { onAddOptionClick } = this.props
        onAddOptionClick(option)
    }

    render() {
        console.log('this.state.isOpen = ' + this.state.isOpen)
        const isOpen = this.state.isOpen
        const { projectOptions } = this.props
        if (isOpen) {
            return (
                <div>
                    <TimerForm projectOptions={projectOptions} onAddOptionClick={this._onAddOptionClick} handleAction={this._handleAction} handleClose={this._toogleIsOpen}></TimerForm>
                </div>
            )
        }
        else {
            return (
                <div>
                    <Button color='blue' animated circular onClick={this._toogleIsOpen} >
                        <Button.Content visible>Add a new Timer</Button.Content>
                        <Button.Content hidden>
                            <Icon name='add circle' />
                        </Button.Content>
                    </Button>
                </div >
            );
        }
    }
}

export default ToggleableTimerForm