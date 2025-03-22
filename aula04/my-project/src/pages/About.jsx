import React from 'react';
import {Rocket, X, Check} from 'lucide-react'

const About = () => {
  return <div className="max-w-md mx-auto rounded overflow-hidden">
        <div className= 'bg-zinc-200 text-white dark:bg-zinc-800 py-4 px-6 flex items-center justify-between'>
          <span className='font-bold'>Notificações </span> 
          <button className='text-violet-500 font-bold text-xs hover:text-violet-400'>MARCAR TODAS VISITAS COMO LIDAS
          </button>
          </div> 
           <div className='bg-zinc-300 font-medium dark:bg-zinc-950 p-2 text-sm text-zinc-500 dark:text-zinc-400'>
            Recentes
           </div>
           <div className='divide-x-2 divide-zinc-300 dark:divide-zinc-950'>
            <div className='flex items-start bg-zinc-200 dark:bg-zinc-900 px-8 py-4 gap-6'> 
               <Rocket className='w-6 h-6 text-violet-500 mt-3'/>
               <div className='flex-1 flex flex-col gap-2'>
                <p className='text-sm leading-relaxed text-zinc-600 dark:text-zinc-100'>
                  Você recebeu um convite para fazer parte da empresa RocketSeat
                </p>
                <div className='text-xxs text-zinc-400 flex items-center gap-1'>
                  <span>Convite</span>
                  <span>Há 3 min</span>
                </div>
               </div>
              <div className='flex gap-2 self-center'>
                <button className='w-8 h-8 rounded flex items-center justify-center bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-800'>
                  <X className='h- w-3 text-zinc-50'/>
                </button>
                <button className='w-8 h-8 rounded flex items-center justify-center bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-800'>
                  <Check className='h- w-3 text-zinc-50'/>
                </button>
              </div>
            </div>
           </div>

           <div className='bg-zinc-300 font-medium dark:bg-zinc-950 px-5 py-2 text-sm text-zinc-500 dark:text-zinc-400'>
            Antigas
           </div>
           <div className='divide-x-2 divide-zinc-300 dark:divide-zinc-950'>
            <div className='flex items-start bg-zinc-200 dark:bg-zinc-900 px-8 py-4 gap-6'> 
               <Rocket className='w-6 h-6 text-violet-500 mt-3'/>
               <div className='flex-1 flex flex-col gap-2'>
                <p className='text-sm leading-relaxed text-zinc-600 dark:text-zinc-100'>
                  Você recebeu um convite para fazer parte da empresa RocketSeat
                </p>
                <div className='text-xxs text-zinc-400 flex items-center gap-1'>
                  <span>Convite</span>
                  <span>Há 3 min</span>
                </div>
               </div>
              <div className='flex gap-2 self-center'>
                <button className='w-8 h-8 rounded flex items-center justify-center bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-800'>
                  <X className='h- w-3 text-zinc-50'/>
                </button>
                <button className='w-8 h-8 rounded flex items-center justify-center bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-800'>
                  <Check className='h- w-3 text-zinc-50'/>
                </button>
              </div>
            </div>
           </div>
  </div>;
};

export default About;