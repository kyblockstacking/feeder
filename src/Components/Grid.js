import React, { Component } from 'react';

export default class Grid extends Component {
    state = {
        MondayAM: {
            background: 'red',
        },
        TuesdayAM: {
            background: 'red',
        }
    };

    handleClick = () => {
        switch (this.state.MondayAM.background) {
            case 'red':
                this.setState({ MondayAM: { background: 'green' } });
                break;
            case 'green':
                this.setState({ MondayAM: { background: 'red' } });
                break;
            default:
                console.log('BROKEN!');
                break;
        }
    };

    render() {
        return (
            <div className='container-fluid grid'>

                <div className='week'>Week 1</div>
                <div className='row week-1'>
                    <div onClick={this.handleClick} style={this.state.MondayAM} className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Monday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Tuesday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Wednesday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Thursday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Friday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Saturday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Sunday AM</div>
                </div>

                <div className='row week-1'>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Monday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Tuesday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Wednesday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Thursday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Friday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Saturday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Sunday PM</div>
                </div>

                <div className='week'>Week 2</div>
                <div className='row week-2'>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Monday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Tuesday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Wednesday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Thursday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Friday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Saturday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Sunday AM</div>
                </div>

                <div className='row week-2'>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Monday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Tuesday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Wednesday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Thursday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Friday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Saturday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Sunday PM</div>
                </div>

                <div className='week'>Week 3</div>
                <div className='row week-3'>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Monday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Tuesday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Wednesday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Thursday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Friday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Saturday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Sunday AM</div>
                </div>

                <div className='row week-3'>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Monday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Tuesday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Wednesday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Thursday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Friday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Saturday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Sunday PM</div>
                </div>

                <div className='week'>Week 4</div>
                <div className='row week-4'>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Monday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Tuesday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Wednesday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Thursday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Friday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Saturday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Sunday AM</div>
                </div>

                <div className='row week-4'>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Monday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Tuesday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Wednesday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Thursday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Friday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Saturday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Sunday PM</div>
                </div>

                <div className='week'>Week 5</div>
                <div className='row week-5'>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Monday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Tuesday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Wednesday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Thursday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Friday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Saturday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Sunday AM</div>
                </div>

                <div className='row week-5'>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Monday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Tuesday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Wednesday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Thursday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Friday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Saturday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Sunday PM</div>
                </div>

            </div>

        );
    };
};