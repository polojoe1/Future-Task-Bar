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
const TaskBar = (props) => {
  return (
    <div className='flex items-center justify-center h-screen w-screen'>
        <div className='h-[600px] w-[230px] rounded-2xl  p-5 flex flex-col opacity-90 bg-gray-700'>
            <div className="dots flex justify-start">
                <div className="red h-[10px] rounded-full w-[10px] mr-1 bg-red-600"></div>
                <div className="red h-[10px] rounded-full w-[10px] mr-1 bg-yellow-400"></div>
                <div className="red h-[10px] rounded-full w-[10px] bg-green-500"></div>
            </div>
            <div className="profile flex">
                <img src={Me}  className='h-16 w-16 border-2 border-blue-100 rounded-full' alt="just me" />
                <div className="wordsWithName flex items-left flex-col">
                    <span className='text-white text-[10px] font-extralight font-serif'>Good Day 🌞</span>
                    <span className='text-white font-bold text-xl'>Joseph C.</span>
                </div>
            </div>
            <hr/>
            <div className="menu flex font-sans text-white flex-col">
                <span className='text-xs'>Menu 🔽</span>
                <div className="dash flex">
                    <span className='text-center'>⏯️ Dashboard</span>
                </div>
                <div className="tsk">
                    <span>🔂 Project Task</span>
                </div>
                <div className="cal">
                    <span>🔼 Calendar</span>
                </div>
                <div className="mail">
                    <span>📧 Mail</span>
                </div>
                <div className="noti">
                    <span>🔔 Notifications</span>
                </div>
                <div className="sale">
                    <span>💵 Sales</span>
                </div>
            </div>
            <hr />
            <div className="services flex flex-col text-white ">
                <span className='text-xs'>Services: <span className='font-black'>3</span></span>
                <div className="apps h-fit p-2 w-48  bg-gray-900 rounded-lg flex flex-col">
                    <div className="pl-2 cursor-pointer tube rounded-md hover:bg-slate-500 flex items-center">
                        <img className='h-4 w-6' src={Tube} alt="tube" />
                        <p className='ml-2'>Youtube</p>
                    </div>
                    <div className="pl-2 cursor-pointer slck rounded-md hover:bg-slate-500 flex items-center">
                        <img src={Slack} className='h-4 w-4' alt="slck" />
                        <p className='ml-[14px]'>Slack</p>
                    </div>
                    <div className="pl-2 cursor-pointer github rounded-md hover:bg-slate-500 flex items-center">
                        <img className='h-4 w-4' src={Github} alt="github" />
                        <p className='ml-[14px]'>GitHub</p>
                    </div>
                    <div className="pl-2 cursor-pointer moreApps rounded-md hover:bg-slate-500 flex items-center">
                        <img className='h-4 w-4' src={Add} alt="add" />
                        <p className='ml-[14px]'>Add new plugin</p>
                    </div>
                </div>
                <div className="setz flex flex-col text-white">
                    <span className='text-xs'>Settings:</span>
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
            </div>
        </div>
    
    </div>
  )
}

export default TaskBar