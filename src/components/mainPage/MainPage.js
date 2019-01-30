import React, {Component} from 'react';  

import CardList from '../card/CardList';
import SearchBox from '../searchBox/SearchBox';
import Scroll from '../scroll/Scroll';
import ErrorBoundry from '../errorBoundry/ErrorBoundry'; 
import './Mainpage.css'


class MainPage extends Component { 
    componentDidMount(){
        this.props.onRequestRobots();
    }
 
    filterRobots = () => {
        return this.props.robots.filter(x => x.name.toLowerCase().includes(this.props.searchField.toLowerCase()))
    }

    render() {
        const { robots, onSearchChange, isPending } = this.props; 
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChanged={onSearchChange} />
                    <Scroll>
                        { isPending 
                            ?  <h1>Loading ...</h1> 
                            :  <ErrorBoundry>
                                    <CardList robots={this.filterRobots(robots)}/>
                                </ErrorBoundry>
                        }
                    </Scroll>
                </div> 
            )
        
    }
}

export default MainPage;