import React,{useState} from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from './utils/swoldier';
import Workout from './Workout';

function Header(props){
  const { index, title, description} = props
  return(
     <div className='flex flex-col gap-4  py-4 '>
        <div className='flex items-centers gap-2 justify-center'>
          <p className='text-3xl sn:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
          <h4 className='text-xl sn:text-2xl md:text-3xl  py-4'>{title}</h4>
        </div>
        <p className='text-sm sm:text-base mx-auto py-4' >{description}</p>
     </div>
  );

}


export default function Generator(props) {
  const {muscle, setMuscle, goals, setGoals, poison, setPoison} = props
  const [showModal, setShowModal] = useState(false);
 
  function toggleModal(){
    setShowModal(!showModal)
  }

  return (
    <>
    <SectionWrapper header={"generate your workout"} title ={'Its huge O Clock'}>
        <Header index='01' title={"Pick your Poison"} description={'Select the workout you wish to endure.'} />
        
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4  py-4'>
      {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return(
            <button className='bg-slate-950 border border-blue-400 py-4 rounded-lg' key={typeIndex}>
              <p className='capitalize'>{type.replaceAll('_'," " )}</p>
            </button>
          )
      })}
        </div>
      

        <Header index='02' title={"Lock on Targets"} description={'Select the muscles judged for annihilation.'} />
        <div className='bg-slate-950 py-3 border border-solid border-blue-400 rounded-lg relative flex items-center justify-center flex-direction-row'>
          <button onClick={toggleModal} className='p-3 relative flex items-center justify-center'>
            <p>Select muscle Groups</p>
            <i className="fa-solid fa-caret-down pl-4"></i>
          </button>
        </div>
        
        {
         showModal &&(
          <div>
            modal
          </div>
         )
        }
        
        <Header index='03' title={"Pick your Poison"} description={'Select the workout you wish to endure.'} />
        ine
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 num3'>
      {Object.keys(SCHEMES).map((type, typeIndex) => {
          return(
            <button className='bg-slate-950 border border-blue-400 py-4 rounded-lg ' key={typeIndex}>
              <p className='capitalize'>{type.replaceAll('_'," " )}</p>
            </button>
          )
      })}
        </div>

    </SectionWrapper>
    </>
  );
}
