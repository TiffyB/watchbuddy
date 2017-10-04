import React, { Component } from 'react';
import { Input, Menu, Button, Icon } from 'semantic-ui-react'

class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  changeView(){
    this.props.changeView('Login');
  }

  render () {
    return (<Menu className="ui inverted menu">

        <Menu.Item>
          <Icon name ='film' /> <Icon name='child' /> WatchBuddy
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item>
            <Input className='icon' icon='search' placeholder='Search...' />
          </Menu.Item>

          <Menu.Item>
            <Button onClick={this.changeView.bind(this)}>Log-in</Button>
          </Menu.Item>
        </Menu.Menu>

      </Menu>);
  }
}

export default Navbar;