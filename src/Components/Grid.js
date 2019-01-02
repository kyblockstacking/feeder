import React, { Component } from 'react';

export default class Grid extends Component {
    state = {

        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        date: new Date().getDate(),
        day: new Date().getDay(),

        MondayAM: {
            background: 'red',
        },
        TuesdayAM: {
            background: 'red',
        }
    };

    componentDidMount() {
        this.WhatDayIsIt();
        this.WhatMonthIsIt();
    }

    WhatDayIsIt = () => {
        switch (this.state.day) {
            case 0:
                this.setState({ day: 'Sunday' })
                break;
            case 1:
                this.setState({ day: 'Monday' })
                break;
            case 2:
                this.setState({ day: 'Tuesday' })
                break;
            case 3:
                this.setState({ day: 'Wednesday' })
                break;
            case 4:
                this.setState({ day: 'Thursday' })
                break;
            case 5:
                this.setState({ day: 'Friday' })
                break;
            case 6:
                this.setState({ day: 'Saturday' })
                break;
            default:
                console.log('What day is it?')
                break;
        };
    };

    WhatMonthIsIt = () => {
        switch (this.state.month) {
            case 0:
                this.setState({ month: 'January' })
                break;
            case 1:
                this.setState({ month: 'February' })
                break;
            case 2:
                this.setState({ month: 'March' })
                break;
            case 3:
                this.setState({ month: 'April' })
                break;
            case 4:
                this.setState({ month: 'May' })
                break;
            case 5:
                this.setState({ month: 'June' })
                break;
            case 6:
                this.setState({ month: 'July' })
                break;
            case 7:
                this.setState({ month: 'August' })
                break;
            case 8:
                this.setState({ month: 'September' })
                break;
            case 9:
                this.setState({ month: 'October' })
                break;
            case 10:
                this.setState({ month: 'November' })
                break;
            case 11:
                this.setState({ month: 'December' })
                break;
            default:
                console.log('What month is it?')
                break;
        };
    };

    handleClick = () => {
        switch (this.state.MondayAM.background) {
            case 'red':
                this.setState({ MondayAM: { background: 'green' } });
                break;
            case 'green':
                this.setState({ MondayAM: { background: 'red' } });
                break;
        }

        switch (this.state.MondayAM.background) {
            case 'red':
                this.setState({ MondayAM: { background: 'green' } });
                break;
            case 'green':
                this.setState({ MondayAM: { background: 'red' } });
                break;
        }
    };

    render() {
        return (
            <div className='container grid'>

                <div>Today's Date: {this.state.day} {this.state.month} {this.state.date} {this.state.year}</div>

                <div className='week'>Week 1</div>
                <div className='row week-1'>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div onClick={this.handleClick} style={this.state.MondayAM} className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Monday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Tuesday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Wednesday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Thursday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Friday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Saturday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Sunday AM</div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                </div>

                <div className='row week-1'>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Monday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Tuesday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Wednesday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Thursday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Friday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Saturday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Sunday PM</div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                </div>

                <div className='week'>Week 2</div>
                <div className='row week-2'>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Monday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Tuesday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Wednesday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Thursday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Friday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Saturday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Sunday AM</div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                </div>

                <div className='row week-2'>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Monday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Tuesday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Wednesday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Thursday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Friday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Saturday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Sunday PM</div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                </div>

                <div className='week'>Week 3</div>
                <div className='row week-3'>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Monday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Tuesday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Wednesday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Thursday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Friday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Saturday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Sunday AM</div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                </div>

                <div className='row week-3'>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Monday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Tuesday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Wednesday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Thursday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Friday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Saturday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Sunday PM</div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                </div>

                <div className='week'>Week 4</div>
                <div className='row week-4'>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Monday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Tuesday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Wednesday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Thursday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Friday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Saturday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Sunday AM</div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                </div>

                <div className='row week-4'>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Monday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Tuesday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Wednesday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Thursday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Friday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Saturday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Sunday PM</div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                </div>

                <div className='week'>Week 5</div>
                <div className='row week-5'>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Monday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Tuesday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Wednesday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Thursday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Friday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Saturday AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Sunday AM</div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                </div>

                <div className='row week-5'>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Monday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Tuesday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Wednesday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Thursday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Friday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Saturday PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Sunday PM</div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                </div>

            </div>

        );
    };
};