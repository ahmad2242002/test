
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "react-multi-date-picker/styles/colors/red.css"
import {DateRangePicker } from 'react-date-range';
function CustomCalender (){ 
    const [state, setState] = useState({
      selection1: {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection1'
      },
    });
    return (
            <div className="flex">
                <div className='flex flex-col'>
                  <div> <DateRangePicker className = "sm:w-full  w-28" color="red"  onChange={item => setState({ ...state, ...item })} moveRangeOnFirstSelection={true}  ranges={[state.selection1]} value = {state} rangeColors={['#f33e5b', '#3ecf8e', '#fed14c']} minDate={new Date()}/></div>
                </div>
             </div>
   )
  }
  
export default CustomCalender;