
import { useState } from "react";
import DatePicker, { Calendar } from "react-multi-date-picker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-multi-date-picker/styles/colors/red.css"
import {
   faCaretLeft, faCaretRight,faUserGroup
  } from "@fortawesome/free-solid-svg-icons";
  import { subMonths,addDays,startOfDay, startOfToday,startOfWeek,addWeeks,startOfMonth,addMonths,endOfMonth } from 'date-fns';
import { document } from "postcss";

function CustomButton({ direction, handleClick, disabled }) {
    return (
      <i onClick={handleClick} className= "bg-gray-100 text-gray-700 px-2 rounded-md hover:bg-gray-300 hover:cursor-pointer" >
        {direction === "right" ? <FontAwesomeIcon icon= {faCaretRight} /> : <FontAwesomeIcon icon= {faCaretLeft}/>}
      </i>
    )
  }
function CustomCalender (Mode){ 
    const [value, setValue] = useState([]);
    const [date1, setDate1] = useState([startOfDay(new Date())]);
    const [date2, setDate2] = useState([startOfDay(new Date())]);
    const targetWeekStart = startOfWeek(startOfDay(new Date()));
    const targetMonthStart = startOfMonth(startOfDay(new Date()));
    return (
            <div className='flex flex-row mx-auto col-span-3'>
                <div className='flex flex-col col-span-3'>
                  <button className='p-3 border-b-2 border-slate-100 w-64 text-left  hover:bg-slate-100 focus:text-red-500 focus:font-semibold text-xs ' onClick={()=>setValue(startOfToday())}>Today</button>
                  <button className='p-3 border-b-2 border-slate-100 w-64 text-left  hover:bg-slate-100 focus:text-red-500 focus:font-semibold text-xs ' onClick={()=>setValue(addDays(startOfToday(), -1))}>Yesterday</button>
                  <button className='p-3 border-b-2 border-slate-100 w-64 text-left  hover:bg-slate-100 focus:text-red-500 focus:font-semibold text-xs ' onClick={()=>setValue(weekselect())}>This Week</button>
                  <button className='p-3 border-b-2 border-slate-100 w-64 text-left  hover:bg-slate-100 focus:text-red-500 focus:font-semibold text-xs '  onClick={()=>setValue(lastweekselect())}>Last Week</button>
                  <button className='p-3 border-b-2 border-slate-100 w-64 text-left  hover:bg-slate-100 focus:text-red-500 focus:font-semibold text-xs ' onClick={()=>setValue(thismonth())}>This Month</button>
                  <button className='p-3 border-b-2 border-slate-100 w-64 text-left  hover:bg-slate-100 focus:text-red-500 focus:font-semibold text-xs ' onClick={()=>setValue(lastmonth())}>Last Month</button>
                  <div className='flex p-3 space-x-3 items-center'>
                    <input type='number' min={0} max={9999} className=' text-xs p-2 appearance-none focus:outline-0 border-2 border-gray-100 rounded-md w-7 h-7' onChange={(e)=>setValue(daysup(e.target.value))}></input>
                    <div className=' text-sm'>days up to today</div>
                  </div>
                  <div className='flex p-3 space-x-3 items-center'>
                    <input type='number' min={0} max={9999} className=' text-xs p-2 appearance-none focus:outline-0 border-2 border-gray-100 rounded-md w-7 h-7' onChange={(e)=>setValue(daysstart(e.target.value))}></input>
                    <div className=' text-sm'>days starting today</div>
                  </div>
                </div>
                <div className='flex flex-col'>
                  <div className='flex bg-slate-100 p-1'>
                    <input readOnly className='m-1 p-2 text-center rounded-sm focus:outline-red-400 hover:cursor-pointer text-gray-400 text-xs' value={date1}></input>
                    <input readOnly className='m-1 p-2 text-center rounded-sm focus:outline-red-400 hover:cursor-pointer text-gray-400 text-xs' value={date2}></input>                  
                    </div>
                  <div> <Calendar  className="red" range = {Mode} showOtherDays rangeHover value={value} onChange={setValue} renderButton={<CustomButton/> }/></div>
                </div>
             </div>
   )
   
  function weekselect()
  {
    console.log(value);
    const currentWeekStart = startOfWeek(startOfDay(new Date()));
    const currentWeekEnd = addDays(currentWeekStart, 6);
    let v = [currentWeekStart,currentWeekEnd];
    console.log(v);
    setDate1(currentWeekStart);
    setDate2(currentWeekEnd);
    return v;
  }
  function lastweekselect()
  {
    console.log(value);
    const currentWeekStart = addWeeks(targetWeekStart,-1);
    const currentWeekEnd = addDays(currentWeekStart, 6);
    let v = [currentWeekStart,currentWeekEnd];
    setDate1(currentWeekStart);
    setDate2(currentWeekEnd);
    console.log(v);
    return v;
  }
  function thismonth()
  {
    const currentMonthStart = startOfMonth(startOfDay(new Date()));
    const currentMonthEnd = endOfMonth(startOfDay(new Date()));
    let v = [currentMonthStart,currentMonthEnd];
    setDate1(currentMonthStart);
    setDate2(currentMonthEnd);
    return v;
  }
  function lastmonth()
  {
    const previousMonthStart = startOfMonth(subMonths(new Date(), 1));
    const previousMonthEnd = endOfMonth(subMonths(new Date(), 1));
    setDate1(previousMonthStart);
    setDate2(previousMonthEnd);
    let v = [previousMonthStart,previousMonthEnd];
    return v;
  }
  function daysup(e)
  {
    const today = new Date();
    const up = addDays(today,-e);
    let v = [up,today];
    setDate1(up);
    setDate2(today);
    return v;
  }
  function daysstart(e)
  {
    const today = new Date();
    const up = addDays(today,e);
    let v = [today,up];
    setDate1(today);
    setDate2(up);
    return v;
  }

  }
  
export default CustomCalender;