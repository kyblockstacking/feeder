import React, { Component } from 'react';

import Box from './Functional/Box.js';

export default class Grid extends Component {
    state = {

        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        date: new Date().getDate(),
        day: new Date().getDay(),


    };

    componentDidMount() {
        this.ConvertDayToText();
        this.ConveryMonthToText();
    };

    handleClick = (event) => {

        if (event.target.getAttribute('color') === 'red') {
            event.target.setAttribute('color', 'green');
        }

        else if (event.target.getAttribute('color') === 'green') {
            event.target.setAttribute('color', 'red');
        }

    };

    render() {
        return (
            <div className='container'>

                <div>Today's Date: {this.state.day} {this.state.month} {this.state.date} {this.state.year}</div>

                <div className='week'>Week 1</div>
                <div className='row week-1'>
                    <Box onclick={this.handleClick} id='box' color='red' text={['Monday', < br />, 'PM']} />
                    <Box text={['Tuesday', < br />, 'PM']} />
                    <Box text={['Wednesday', < br />, 'PM']} />
                    <Box text={['Thursday', < br />, 'PM']} />
                    <Box text={['Friday', < br />, 'PM']} />
                    <Box text={['Saturday', < br />, 'PM']} />
                    <Box text={['Sunday', < br />, 'PM']} />
                </div>

                <div className='row week-1'>
                    <Box text={['Monday', < br />, 'PM']} />
                    <Box text={['Tuesday', < br />, 'PM']} />
                    <Box text={['Wednesday', < br />, 'PM']} />
                    <Box text={['Thursday', < br />, 'PM']} />
                    <Box text={['Friday', < br />, 'PM']} />
                    <Box text={['Saturday', < br />, 'PM']} />
                    <Box text={['Sunday', < br />, 'PM']} />
                </div>

                <div className='week'>Week 2</div>
                <div className='row week-2'>
                    <Box text={['Monday', < br />, 'AM']} />
                    <Box text={['Tuesday', < br />, 'AM']} />
                    <Box text={['Wednesday', < br />, 'AM']} />
                    <Box text={['Thursday', < br />, 'AM']} />
                    <Box text={['Friday', < br />, 'AM']} />
                    <Box text={['Saturday', < br />, 'AM']} />
                    <Box text={['Sunday', < br />, 'AM']} />
                </div>

                <div className='row week-2'>
                    <Box text={['Monday', < br />, 'PM']} />
                    <Box text={['Tuesday', < br />, 'PM']} />
                    <Box text={['Wednesday', < br />, 'PM']} />
                    <Box text={['Thursday', < br />, 'PM']} />
                    <Box text={['Friday', < br />, 'PM']} />
                    <Box text={['Saturday', < br />, 'PM']} />
                    <Box text={['Sunday', < br />, 'PM']} />
                </div>

                <div className='week'>Week 3</div>
                <div className='row week-3'>
                    <Box text={['Monday', < br />, 'AM']} />
                    <Box text={['Tuesday', < br />, 'AM']} />
                    <Box text={['Wednesday', < br />, 'AM']} />
                    <Box text={['Thursday', < br />, 'AM']} />
                    <Box text={['Friday', < br />, 'AM']} />
                    <Box text={['Saturday', < br />, 'AM']} />
                    <Box text={['Sunday', < br />, 'AM']} />
                </div>

                <div className='row week-3'>
                    <Box text={['Monday', < br />, 'PM']} />
                    <Box text={['Tuesday', < br />, 'PM']} />
                    <Box text={['Wednesday', < br />, 'PM']} />
                    <Box text={['Thursday', < br />, 'PM']} />
                    <Box text={['Friday', < br />, 'PM']} />
                    <Box text={['Saturday', < br />, 'PM']} />
                    <Box text={['Sunday', < br />, 'PM']} />
                </div>

                <div className='week'>Week 4</div>
                <div className='row week-4'>
                    <Box text={['Monday', < br />, 'AM']} />
                    <Box text={['Tuesday', < br />, 'AM']} />
                    <Box text={['Wednesday', < br />, 'AM']} />
                    <Box text={['Thursday', < br />, 'AM']} />
                    <Box text={['Friday', < br />, 'AM']} />
                    <Box text={['Saturday', < br />, 'AM']} />
                    <Box text={['Sunday', < br />, 'AM']} />
                </div>

                <div className='row week-4'>
                    <Box text={['Monday', < br />, 'PM']} />
                    <Box text={['Tuesday', < br />, 'PM']} />
                    <Box text={['Wednesday', < br />, 'PM']} />
                    <Box text={['Thursday', < br />, 'PM']} />
                    <Box text={['Friday', < br />, 'PM']} />
                    <Box text={['Saturday', < br />, 'PM']} />
                    <Box text={['Sunday', < br />, 'PM']} />
                </div>

                <div className='week'>Week 5</div>
                <div className='row week-5'>
                    <Box text={['Monday', < br />, 'PM']} />
                    <Box text={['Tuesday', < br />, 'PM']} />
                    <Box text={['Wednesday', < br />, 'PM']} />
                    <Box text={['Thursday', < br />, 'PM']} />
                    <Box text={['Friday', < br />, 'PM']} />
                    <Box text={['Saturday', < br />, 'PM']} />
                    <Box text={['Sunday', < br />, 'PM']} />
                </div>

                <div className='row week-5'>
                    <Box text={['Monday', < br />, 'PM']} />
                    <Box text={['Tuesday', < br />, 'PM']} />
                    <Box text={['Wednesday', < br />, 'PM']} />
                    <Box text={['Thursday', < br />, 'PM']} />
                    <Box text={['Friday', < br />, 'PM']} />
                    <Box text={['Saturday', < br />, 'PM']} />
                    <Box text={['Sunday', < br />, 'PM']} />
                </div>

            </div>

        );
    };


    ConvertDayToText = () => {
        switch (this.state.day) {
            case 0: this.setState({ day: 'Sunday' })
                break;
            case 1: this.setState({ day: 'Monday' })
                break;
            case 2: this.setState({ day: 'Tuesday' })
                break;
            case 3: this.setState({ day: 'Wednesday' })
                break;
            case 4: this.setState({ day: 'Thursday' })
                break;
            case 5: this.setState({ day: 'Friday' })
                break;
            case 6: this.setState({ day: 'Saturday' })
                break;
            default:
                console.log('What day is it?')
                break;
        };
    };

    ConveryMonthToText = () => {
        switch (this.state.month) {
            case 0: this.setState({ month: 'January' })
                break;
            case 1: this.setState({ month: 'February' })
                break;
            case 2: this.setState({ month: 'March' })
                break;
            case 3: this.setState({ month: 'April' })
                break;
            case 4: this.setState({ month: 'May' })
                break;
            case 5: this.setState({ month: 'June' })
                break;
            case 6: this.setState({ month: 'July' })
                break;
            case 7: this.setState({ month: 'August' })
                break;
            case 8: this.setState({ month: 'September' })
                break;
            case 9: this.setState({ month: 'October' })
                break;
            case 10: this.setState({ month: 'November' })
                break;
            case 11: this.setState({ month: 'December' })
                break;
            default:
                console.log('What month is it?')
                break;
        };
    };

};