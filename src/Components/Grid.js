import React, { Component } from 'react';

export default class Grid extends Component {
    state = {

        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        date: new Date().getDate(),
        day: new Date().getDay(),

        // week 1
        MondayAM_Week_1: {
            background: 'red',
        },
        TuesdayAM_Week_1: {
            background: 'red',
        },
        WednesdayAM_Week_1: {
            background: 'red',
        },
        ThursdayAM_Week_1: {
            background: 'red',
        },
        FridayAM_Week_1: {
            background: 'red',
        },
        SaturdayAM_Week_1: {
            background: 'red',
        },
        SundayAM_Week_1: {
            background: 'red',
        },
        // week 2
        MondayAM_Week_2: {
            background: 'red',
        },
        TuesdayAM_Week_2: {
            background: 'red',
        },
        WednesdayAM_Week_2: {
            background: 'red',
        },
        ThursdayAM_Week_2: {
            background: 'red',
        },
        FridayAM_Week_2: {
            background: 'red',
        },
        SaturdayAM_Week_2: {
            background: 'red',
        },
        SundayAM_Week_2: {
            background: 'red',
        },
        // week 3
        MondayAM_Week_3: {
            background: 'red',
        },
        TuesdayAM_Week_3: {
            background: 'red',
        },
        WednesdayAM_Week_3: {
            background: 'red',
        },
        ThursdayAM_Week_3: {
            background: 'red',
        },
        FridayAM_Week_3: {
            background: 'red',
        },
        SaturdayAM_Week_3: {
            background: 'red',
        },
        SundayAM_Week_3: {
            background: 'red',
        },
        // week 4
        MondayAM_Week_4: {
            background: 'red',
        },
        TuesdayAM_Week_4: {
            background: 'red',
        },
        WednesdayAM_Week_4: {
            background: 'red',
        },
        ThursdayAM_Week_4: {
            background: 'red',
        },
        FridayAM_Week_4: {
            background: 'red',
        },
        SaturdayAM_Week_4: {
            background: 'red',
        },
        SundayAM_Week_4: {
            background: 'red',
        },
        // week 5
        MondayAM_Week_5: {
            background: 'red',
        },
        TuesdayAM_Week_5: {
            background: 'red',
        },
        WednesdayAM_Week_5: {
            background: 'red',
        },
        ThursdayAM_Week_5: {
            background: 'red',
        },
        FridayAM_Week_5: {
            background: 'red',
        },
        SaturdayAM_Week_5: {
            background: 'red',
        },
        SundayAM_Week_5: {
            background: 'red',
        },
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
        switch (this.state.MondayAM_Week_1.background) {
            case 'red':
                this.setState({ MondayAM_Week_1: { background: 'green' } });
                break;
            case 'green':
                this.setState({ MondayAM_Week_1: { background: 'red' } });
                break;
            default:
                console.log('error color change');
                break;
        }

        switch (this.state.MondayAM_Week_1.background) {
            case 'red':
                this.setState({ MondayAM_Week_1: { background: 'green' } });
                break;
            case 'green':
                this.setState({ MondayAM_Week_1: { background: 'red' } });
                break;
            default:
                console.log('error color change');
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
                    <div onClick={this.handleClick} style={this.state.MondayAM_Week_1} className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Monday<br />AM</div>
                    <div onClick={this.handleClick} style={this.state.TuesdayAM_Week_1} className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Tuesday<br />AM</div>
                    <div onClick={this.handleClick} style={this.state.WednesdayAM_Week_1} className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Wednesday<br />AM</div>
                    <div onClick={this.handleClick} style={this.state.ThursdayAM_Week_1} className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Thursday<br />AM</div>
                    <div onClick={this.handleClick} style={this.state.FridayAM_Week_1} className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Friday<br />AM</div>
                    <div onClick={this.handleClick} style={this.state.SaturdayAM_Week_1} className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Saturday<br />AM</div>
                    <div onClick={this.handleClick} style={this.state.SundayAM_Week_1} className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Sunday<br />AM</div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                </div>

                <div className='row week-1'>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Monday<br />PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Tuesday<br />PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Wednesday<br />PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Thursday<br />PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Friday<br />PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Saturday<br />PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Sunday<br />PM</div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                </div>

                <div className='week'>Week 2</div>
                <div className='row week-2'>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Monday<br />AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Tuesday<br />AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Wednesday<br />AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Thursday<br />AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Friday<br />AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Saturday<br />AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Sunday<br />AM</div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                </div>

                <div className='row week-2'>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Monday<br />PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Tuesday<br />PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Wednesday<br />PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Thursday<br />PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Friday<br />PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Saturday<br />PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Sunday<br />PM</div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                </div>

                <div className='week'>Week 3</div>
                <div className='row week-3'>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Monday<br />AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Tuesday<br />AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Wednesday<br />AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Thursday<br />AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Friday<br />AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Saturday<br />AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Sunday<br />AM</div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                </div>

                <div className='row week-3'>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Monday<br />PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Tuesday<br />PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Wednesday<br />PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Thursday<br />PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Friday<br />PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Saturday<br />PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Sunday<br />PM</div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                </div>

                <div className='week'>Week 4</div>
                <div className='row week-4'>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Monday<br />AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Tuesday<br />AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Wednesday<br />AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Thursday<br />AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Friday<br />AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Saturday<br />AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Sunday<br />AM</div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                </div>

                <div className='row week-4'>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Monday<br />PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Tuesday<br />PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Wednesday<br />PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Thursday<br />PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Friday<br />PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Saturday<br />PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Sunday<br />PM</div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                </div>

                <div className='week'>Week 5</div>
                <div className='row week-5'>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Monday<br />AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Tuesday<br />AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Wednesday<br />AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Thursday<br />AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Friday<br />AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Saturday<br />AM</div>
                    <div className='days col-sm-1 col-md-1 col-lg-1 col-xl-1'>Sunday<br />AM</div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                </div>

                <div className='row week-5'>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Monday<br />PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Tuesday<br />PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Wednesday<br />PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Thursday<br />PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Friday<br />PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Saturday<br />PM</div>
                    <div className='nights col-sm-1 col-md-1 col-lg-1 col-xl-1'>Sunday<br />PM</div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                    <div className='col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                </div>

            </div>

        );
    };
};