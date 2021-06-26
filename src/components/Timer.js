import React from 'react';
import { Card, Icon, Grid, Label, Header, } from 'semantic-ui-react'
import TimerHelper from '../helpers/TimerHelper';
import TimerStartStop from './TimerStartStop'

class Timer extends React.Component {

    constructor(props) {
        super(props)
        this.setIntervalId = undefined
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        clearInterval(this.setIntervalId);
    }

    _handleEditClick = (e) => {
        console.log('_handleEditClick')
        const { onEditClick, timer } = this.props
        onEditClick(timer)
    }

    _handleTrashClick = (e) => {
        console.log('_handleTrashClick')
        const { onTrashClick, timer } = this.props
        onTrashClick(timer)
    }

    _startTimer = () => {
        const { timer } = this.props;
        console.log('_startTimer = ' + timer.runningSince)
        this.setIntervalId = setInterval(this._runTimer, 50);
        const { onStartClick } = this.props
        onStartClick(timer)
    }

    _stopTimer = () => {
        const { timer } = this.props;
        console.log('_stopTimer')
        clearInterval(this.setIntervalId);
        const { onStopClick } = this.props
        onStopClick(timer)
    }

    _runTimer = () => {
        console.log('_runTimer');
        this.forceUpdate()
    }

    render() {
        const extra = (
            <div>
                <Label as='a' onClick={this._handleEditClick}>
                    <Icon name='edit' />
                    Edit
                </Label>
                <Label as='a' onClick={this._handleTrashClick} >
                    <Icon name='trash' />
                    Trash
                </Label>
            </div>
        )
        const { timer } = this.props;
        const created = new Intl.DateTimeFormat('en').format(timer.created);
        const ellapsedTime = TimerHelper.computeElapsedTime(timer)
        return (
            <Card centered>
                <Card.Content>
                    <Card.Header textAlign='left'>{timer.title}</Card.Header>
                    <Card.Meta textAlign='left' className='timerMetadata'>
                        <Label>
                            <Icon name='folder open outline' />
                            <Label.Detail>{timer.projectId}</Label.Detail>
                        </Label>
                        <Label>
                            <Icon name='calendar alternate outline' />
                            <Label.Detail>{created}</Label.Detail>
                        </Label>
                    </Card.Meta>
                    <Card.Description textAlign='center'>
                        <Header as='h2'>
                            <Icon name='clock outline' />
                            <Header.Content className='timeFlies'>{ellapsedTime}</Header.Content>
                        </Header>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra textAlign='right'>
                    {extra}
                </Card.Content>
                <Card.Content extra>
                    <TimerStartStop onStartClick={this._startTimer} onStopClick={this._stopTimer}></TimerStartStop>
                </Card.Content>
            </Card>
        );
    }
}

export default Timer