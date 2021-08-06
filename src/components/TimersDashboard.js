import React from 'react';
import { Grid, Header } from 'semantic-ui-react'
import EditableTimerList from './EditableTimerList'
import ToggleableTimerForm from './ToggleableTimerForm'
import '../assets/styles/TimersDashboard.css'
import TimerHelper from '../helpers/TimerHelper';

class TimersDashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timers: [],
            projectOptions: []
        }
    }

    _onCreateClick = (data) => {
        const timer = TimerHelper.createTimer(
            data.projectId,
            data.title
        )
        console.log('_handleCreateAction =' + JSON.stringify(timer))
        this.setState({
            timers: [...this.state.timers, timer]
        }, () => {
            console.log('timer created')
            console.log(JSON.stringify(timer))
        })
        //debugger
    }

    _onEditClick = (data) => {
        //debugger
        this.setState({
            timers: this.state.timers.map(obj => {
                if (obj.id === data.id) {
                    return Object.assign({}, obj, {
                        title: data.title,
                        projectId: data.projectId
                    })
                }
                else {
                    return obj
                }
            })
        }, () => {
            console.log('timer edited')
        })
        // console.log('timer ')
    }

    _onTrashClick = (data) => {
        let netTimers = this.state.timers.filter(o => o.id !== data.id)
        this.setState({
            timers: netTimers
        }, () => {
            console.log('timer deleted')
        })
    }


    _onAddOptionClick = (option) => {
        // onAddOptionClick(option)
        this.setState({
            projectOptions: [
                {
                    key: this.state.projectOptions.length,
                    text: option,
                    value: option
                },
                ...this.state.projectOptions,
            ]
        })
        //debugger
    }

    _onStartClick = (timer) => {
        const now = new Date().getTime()
        this.setState({
            timers: this.state.timers.map(obj => {
                if (obj.id === timer.id) {
                    return Object.assign({}, timer, {
                        runningSince: now,
                    })
                }
                else {
                    return obj
                }
            })
        }, () => {
            console.log('timer edited')
        })
    }

    _onStopClick = (timer) => {
        const now = new Date().getTime()
        this.setState({
            timers: this.state.timers.map(obj => {
                if (obj.id === timer.id) {
                    return Object.assign({}, timer, {
                        runningSince: 0,
                        ellapsedTime: timer.ellapsedTime + (now - timer.runningSince)
                    })
                }
                else {
                    return obj
                }
            })
        }, () => {
            console.log('timer edited')
        })
    }

    loadTimersFromServer() {

    }

    componentDidMount() {
        this.loadTimersFromServer();
        setInterval(this.loadTimersFromServer, 5000);
    }

    render() {
        return (
            <Grid centered container padded relaxed textAlign={'center'} className='mainContainer' stretched>
                <Grid.Column textAlign={'center'}>
                    <Grid.Row className='headerContainer'>
                        <Header as='h1' dividing>
                            Timer App
                            <Header.Subheader>
                                Made by React
                            </Header.Subheader>
                        </Header>
                    </Grid.Row>
                    <Grid.Row>
                        <EditableTimerList
                            timers={this.state.timers}
                            onEditClick={this._onEditClick}
                            onTrashClick={this._onTrashClick}
                            onStartClick={this._onStartClick}
                            onStopClick={this._onStopClick}
                            projectOptions={this.state.projectOptions}
                            onAddOptionClick={this._onAddOptionClick}
                        />
                    </Grid.Row>
                    <Grid.Row className='footerContainer'>
                        <ToggleableTimerForm
                            onCreateClick={this._onCreateClick}
                            projectOptions={this.state.projectOptions}
                            onAddOptionClick={this._onAddOptionClick}
                        />
                    </Grid.Row>
                </Grid.Column>
            </Grid >
        );
    }
}


export default TimersDashboard