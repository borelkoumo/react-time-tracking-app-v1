import React from 'react'
import { Icon, Button, } from 'semantic-ui-react'

class TimerStartStop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isRunning: false
        }
    }

    _startTimer = () => {
        const { onStartClick } = this.props
        this.setState({
            isRunning: true
        })
        onStartClick()
    }

    _stopTimer = () => {
        const { onStopClick } = this.props
        this.setState({
            isRunning: false
        })
        onStopClick()
    }

    render() {
        if (this.state.isRunning) {
            return (
                <Button color='red' animated fluid circular onClick={this._stopTimer}>
                    <Button.Content visible>Stop timer</Button.Content>
                    <Button.Content hidden >
                        <Icon name='stop circle outline' />
                    </Button.Content>
                </Button>
            )
        }
        else {
            return (
                <Button color='green' animated fluid circular onClick={this._startTimer}>
                    <Button.Content visible>Start timer</Button.Content>
                    <Button.Content hidden >
                        <Icon name='play circle outline' />
                    </Button.Content>
                </Button>
            )
        }
    }
}

export default TimerStartStop