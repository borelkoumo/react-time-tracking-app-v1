import React from 'react';
import { Header } from 'semantic-ui-react'
import EditableTimer from './EditableTimer'

class EditableTimerList extends React.Component {
    _onTrashClick = (timer) => {
        const { onTrashClick } = this.props
        onTrashClick(timer)
    }

    _onEditClick = (timer) => {
        const { onEditClick } = this.props
        onEditClick(timer)
        //debugger
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
        const { timers } = this.props
        let view = <></>
        if (timers && timers.length !== 0) {
            view = timers.map((timer, index) => {
                return <EditableTimer
                    key={index}
                    timer={timer}
                    onTrashClick={this._onTrashClick}
                    onEditClick={this._onEditClick}
                    onStartClick={this._onStartClick}
                    onStopClick={this._onStopClick}
                    projectOptions={this.props.projectOptions}
                    onAddOptionClick={this.props.onAddOptionClick}
                >
                </EditableTimer>
            })
        }
        return (
            view
        );
    }
}

export default EditableTimerList