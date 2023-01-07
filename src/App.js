
import React,{useState,useEffect} from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa'

const URI = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);
  const [jobs, setJobs] = useState([]);

  const fetchApi = async()=>{
    const reapone = await fetch(URI);
    const newJob = await reapone.json();
    setJobs(newJob);
    setLoading(false);
  }
  useEffect(() => {
    fetchApi();
  }, [])
  if(loading){
    return(
    <section className='section loading'>
      <h3>loading...!</h3>
    </section>
  )}
  const {company,date,duties,title} = jobs[value];
  return (
   <section className='section'>
    <div className="title">
      <h3>Expirence</h3>
      <div className="underline"></div>
    </div>
    <div className="job-center">
      {/* btn container*/}
      <div className="btn-container">
        {
          jobs.map((item,index) =>{
            return (
              <button 
              key={item.id}
              onClick={() =>setValue(index)}  
              className={`job-btn ${index === value && 'active-btn'}`}>
                <h3>{item.company}</h3>
              </button>
            )
          })
        }
      </div>
      {/*job center*/}
      <article className='job-info'>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className='job-date'>{date}</p>
        {
          duties.map((duty,index) =>{
            return(<div key={index} className='job-des'>
               <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
               <p>{duty}</p>
            </div>
            )
          })
        }
      </article>
      <button type='button' className='btn'>
        more info
      </button>
    </div>
   </section>   
  );
}

export default App;
