import { Link } from 'react-router-dom';
import './Section.css'
import DivContainer from '../../Hooks/DivContainer';

const Section = () => {
  return (
    <DivContainer>
    <div>
      <div className=' flex justify-between'>
        <div>
        <div className=" font-bold text-2xl ml-10">Solutions built for you</div> 
        </div>
        <div><button className="btn btn-wide  hover:bg-green-500 mr-10">View Products A-Z</button></div>
      </div>
    <Link className=" grid grid-cols-2 gap-10  ml-24 ">
      <div className='zoom'>
      <div className="card  w-[650px]  bg-red-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
          Enterprise Resource Planning      
          </h2>
          <p>SAP S/4HANA Cloud is complete, modular, and award-winning ERP. Embedded with AI and analytics, it can help your business run anywhere, in real time.</p>
        </div>
      </div>
      </div>
      <div className='zoom'>
      <div className="card  w-[650px]  bg-red-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
          CRM and Customer Experience
          </h2>
          <p>With our CX solutions, you can connect e-commerce, marketing, sales, and service data – and use AI to personalise the customer experience at every touchpoint.</p>
        </div>
      </div>
      </div>
      <div className='zoom'>
      <div className="card  w-[650px]  bg-red-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
          Financial Management
          </h2>
          <p>With the latest finance technology, you can innovate new business models, grow revenue, and automate anything from FP&A and accounting to GRC.</p>
        </div>
      </div>
      </div>
      <div className='zoom'>
      <div className="card  w-[650px]  bg-red-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
          Supply Chain Management
          </h2>
          <p>Run a risk-resilient and sustainable supply chain that can adapt to anything. Discover our solutions for supply chain planning, manufacturing, logistics, and more. </p>
        </div>
      </div>
      </div>
      <div className='zoom'>
      <div className="card  w-[650px]  bg-red-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
          Spend Management
          </h2>
          <p>Reduce costs and risks as you automate and control all types of spend with market-leading source-to-pay, external workforce management, and T&E solutions.</p>
        </div>
      </div>
      </div>
      <div className='zoom'>
      <div className="card  w-[650px]  bg-red-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
          Human Capital Management
          </h2>
          <p>Embrace the future of work with the next generation of HCM: SAP SuccessFactors solutions for core HR, talent management, employee experience, and more.</p>
        </div>
      </div>
      </div>
      <div className='zoom'>
      <div className="card  w-[650px]  bg-red-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
          Business Technology Platform
          </h2>
          <p>Continuously innovate and evolve with platform solutions for data and analytics, app development and automation, integration, enterprise planning, and AI.?</p>
        </div>
      </div>
      </div>
      <div className='zoom'>
      <div className="card  w-[650px]  bg-red-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
          Business Network
          </h2>
          <p>Connecting people, processes, and systems across multiple enterprises to digitalise transactions for transparent, resilient, and sustainable supply chains.?</p>
        </div>
      </div>
      </div>
      
    </Link>
    </div>
    </DivContainer>
   
  );
};

export default Section;
