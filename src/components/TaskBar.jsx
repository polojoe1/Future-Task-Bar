import React from 'react'
import Me from '../assets/me.png'
import Tube from '../assets/tube.png'
import Slack from '../assets/slack.png'
import Github from '../assets/github.png';
import Add from '../assets/add.png'
import Settings from '../assets/settings.png'
import Audio from '../assets/audio.png'
import Light from '../assets/light.png'
import Chart from '../assets/chart.png'
import Profile from '../assets/profile.png'
import Image from '../assets/image.png'
import Dash from '../assets/dash.png'
import Task from '../assets/task.png'
import Calendar from '../assets/calendar.png'
import Mail from '../assets/mail.png'
import Notify from '../assets/notify.png'
import Sales from '../assets/sales.png'
const TaskBar = (props) => {
  return (
    <div className='flex items-center justify-center h-screen w-screen'>
        <div className='h-[620px] w-[230px] rounded-2xl  p-5 flex flex-col justify-around opacity-90 bg-gray-700'>
            <div className="dots flex justify-start mt-2 mb-3">
                <div className="red h-[10px] rounded-full w-[10px] mr-1 bg-red-600"></div>
                <div className="red h-[10px] rounded-full w-[10px] mr-1 bg-yellow-400"></div>
                <div className="red h-[10px] rounded-full w-[10px] bg-green-500 flex justify-center items-center"></div>
            </div>
            <div className="profile flex mb-3">
                <img src={Me}  className='h-12 w-12 border-2 border-blue-100 rounded-full' alt="just me" />
                <div className="wordsWithName flex ml-2 items-left justify-items-center flex-col">
                    <span className='text-white text-[10px] font-extralight font-serif'>Good Day 🌞</span>
                    <span className='text-white font-bold text-xl'>Joseph C.</span>
                </div>
            </div>
            <hr className='opacity-30 mb-3'/>
            <div className="menu flex font-sans text-white flex-col">
                <span className='text-xs mb-1'>Menu:</span>
                <div className="dash flex opacity-80 h-[30px] items-center">
                    <img src={Dash} className='h-3 w-3 mr-2' alt="dash" /> 
                    <span className='text-sm'>Dashboard</span>
                </div>
                <div className="tsk h-[30px] flex opacity-80 items-center">
                    <img src={Task} alt="all task"  className='h-3 w-3 mr-2'/>
                    <span className='text-sm'>Project Task</span>
                </div>
                <div className="cal h-[30px] flex opacity-80 items-center">
                    <img src={Calendar} alt="calendar" className='h-3 w-3 mr-2' />
                    <span className='text-sm'>Calendar</span>
                </div>
                <div className="mail h-[30px] flex opacity-80 items-center">
                    <img src={Mail} alt="mail" className='h-3 w-3 mr-2' />
                    <span className='text-sm'>Mail</span>
                </div>
                <div className="noti h-[30px] flex opacity-80 items-center">
                    <img src={Notify} alt="notify" className='h-3 w-3 mr-2'/>
                    <span className='text-sm'>Notifications</span>
                </div>
                <div className="sale h-[30px] flex opacity-80 items-center">
                    <img src={Sales} alt="sales" className='h-3 w-3 mr-2' />
                    <span className='text-sm'>Sales</span>
                </div>
            </div>
            <hr  className='opacity-30 mb-2'/>
            <div className="services flex flex-col text-white ">
                <span className='text-xs mb-1'>Services: <span className='font-black'>3</span></span>
                <div className="apps h-fit mb-1 p-2 w-48  bg-gray-900 rounded-lg flex flex-col">
                    <div className="pl-2 cursor-pointer tube rounded-md hover:bg-slate-500 flex items-center">
                        <div className='h-4 w-4 rounded-full flex justify-center items-center bg-slate-600'><img className='h-2 w-3' src={Tube} alt="tube" /></div>
                        <p className='ml-2 text-sm'>Youtube</p>
                    </div>
                    <div className="pl-2 cursor-pointer slck rounded-md hover:bg-slate-500 flex items-center">
                        <div className='h-4 w-4 rounded-full flex justify-center items-center bg-slate-600'><img src={Slack} className='h-3 w-3' alt="slck" /></div>
                        <p className='ml-[14px] text-sm'>Slack</p>
                    </div>
                    <div className="pl-2 cursor-pointer github rounded-md hover:bg-slate-500 flex items-center">
                        <div className='h-4 w-4 rounded-full flex justify-center items-center bg-slate-600'><img className='h-3 w-3' src={Github} alt="github" /></div>
                        <p className='ml-[14px] text-sm'>GitHub</p>
                    </div>
                    <div className="pl-2 cursor-pointer moreApps rounded-md hover:bg-slate-500 flex items-center">
                        <img className='h-4 w-4' src={Add} alt="add" />
                        <p className='ml-[14px] text-sm'>Add new plugin</p>
                    </div>
                </div>
                <div className="setz flex flex-col text-white">
                    <span className='text-xs mb-1'>Settings:</span>
                    <div className="apps h-fit p-2 w-48 justify-around bg-gray-900 rounded-lg flex">
                        <div className="firstSix hover:bg-slate-500 h-6 rounded-md w-6 flex items-center justify-center">
                            <img src={Settings} className=' h-4 w-4' alt="" />
                        </div>
                        <div className="secondSix hover:bg-slate-500 h-6 rounded-md w-6 flex items-center justify-center">
                            <img src={Audio} className='hover:bg-slate-500 h-4 w-4' alt="audio" />
                        </div>
                        <div className="thirdSix hover:bg-slate-500 h-6 rounded-md w-6 flex items-center justify-center">
                            <img src={Light} className='hover:bg-slate-500 h-4 w-3' alt="light" />
                        </div>
                        <div className="fourthSIX hover:bg-slate-500 h-6 rounded-md w-6 flex items-center justify-center">
                            <img src={Chart} className='hover:bg-slate-500 h-4 w-4' alt="chart" />
                        </div>
                        <div className="fifthSix hover:bg-slate-500 h-6 rounded-md w-6 flex items-center justify-center">
                            <img src={Profile} className='hover:bg-slate-500 h-4 w-4' alt="profile" />
                        </div>
                        <div className="sixthSix hover:bg-slate-500 h-6 rounded-md w-6 flex items-center justify-center">
                            <img src={Image} className='hover:bg-slate-500 h-4 w-4' alt="wow" />
                        </div>
                    </div>
                </div>
                <div className="newTask  h-fit p-2 w-48 mt-2 justify-around flex-col items-center bg-gray-900  rounded-lg flex">
                    <div className="circle h-10 w-10 bg-gradient-to-l from-pink-500 to-yellow-500 rounded-full text-center flex align-center justify-center cursor-pointer hover:from-pink-400 hover:to-yellow-400">
                        <span className='text-3xl font-bold'>+</span>
                    </div>
                    <span className='font-bold '>Create new task</span>
                    <span className='text-xs'>Or use <span className='text-orange-300 font-bold hover:font-black cursor-pointer'>invite link</span></span>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default TaskBar