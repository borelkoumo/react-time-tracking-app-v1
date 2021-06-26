import React from 'react';
import { Card, Form, Button, Dropdown, } from 'semantic-ui-react'
import TimerHelper from '../helpers/TimerHelper';

class TimerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.timer ? this.props.timer.id : undefined,
            title: this.props.timer ? this.props.timer.title : '',
            projectId: this.props.timer ? this.props.timer.projectId : '',
            action: this.props.timer ? 'Edit' : 'Create'
        }
        //this.projectOptions = this.props.projectOptions
    }

    _handleTitleChange = (e) => {
        this.setState({ title: e.target.value }, () => {
            console.log('this.state._handleTitleChange = ' + this.state.title)
        })
    }

    _handleProjectIdChange = (e, data) => {
        //debugger;
        this.setState({ projectId: data.value }, () => {
            console.log('this.state._handleProjectIdChange = ' + this.state.projectId)
        })
    }

    _handleAddItem = (e, { value }) => {
        const { onAddOptionClick } = this.props
        onAddOptionClick(value);

    }

    _onActionClick = () => {
        const { handleAction } = this.props
        const data = {
            id: this.state.id,
            projectId: this.state.projectId,
            title: this.state.title,
            created: this.state.created
        }

        handleAction(data)
        console.log("_onActionClick = " + JSON.stringify(data))
    }

    _onCloseClick = (e) => {
        const { handleClose } = this.props
        handleClose()
        console.log("_onCloseClick")
    }

    render() {
        const { projectOptions } = this.props
        return (
            <Card centered>
                <Card.Content textAlign={'left'}>
                    <Form>
                        <Form.Field>
                            <label>Title</label>
                            <input placeholder='Enter title' value={this.state.title} autoFocus onChange={this._handleTitleChange} />
                        </Form.Field>
                        <Form.Field>
                            <Dropdown
                                button
                                fluid
                                search
                                selection
                                allowAdditions
                                // labeled
                                // className='icon'
                                // icon='crosshairs'
                                options={projectOptions}
                                placeholder='Select course'
                                onChange={this._handleProjectIdChange}
                                onAddItem={this._handleAddItem}
                                value={this.state.projectId ? this.state.projectId.toString() : ''}
                            />
                        </Form.Field>
                    </Form>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button color='green' onClick={this._onActionClick}>
                            {this.state.action}
                        </Button>
                        <Button basic color='red' onClick={this._onCloseClick}>
                            Cancel
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        );
    }
}

export default TimerForm