import React, { Component } from 'react';
import NavbarFeatures from './NavBarFeatures';

import TraineeTable from '../components/TraineeTable';


class TrainerPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="TrainerPage">
                <NavbarFeatures class="p-3 mb-2 bg-dark text-white" className="NavBarMain1">
                </NavbarFeatures>
                
                <TraineeTable/>
            </div>
            );
    }
}
 
export default TrainerPage;