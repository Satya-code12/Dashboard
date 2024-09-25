import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faChartColumn, faCreditCard, faFile, faFileInvoice, faGear, faHeadphones, faHouse, faReceipt } from '@fortawesome/free-solid-svg-icons';

export const Dashboard = () =>{
 return(
  <section className="w-full h-screen text-black bg-slate-200 font-serif" >
   <nav className="border border-white container flex flex-col h-screen w-[12rem] px-5 text-justify">
    <div className="border border-white rounded-lg h-10 mt-5 p-[5px] bg-slate-300 pl-3 font-extrabold text-2xl cursor-pointer shadow-xl">
    <h2>Ficecorp</h2>
    </div>
    <p className="mt-4 mb-4 pl-3">MENU</p>
    <div className="border border-white rounded-lg h-[31rem] flex flex-col justify-evenly bg-slate-300 text-md shadow-xl">
    <button className="text-start pl-4 hover:bg-sky-100 h-8 rounded-lg">
    <FontAwesomeIcon icon={faHouse} size="sm" /> Dashboard</button>
    <button className="text-start pl-4  hover:bg-sky-100 h-8 rounded-lg">
    <FontAwesomeIcon icon={faChartColumn} size="sm" /> Activities</button>
    <button className="text-start pl-4  hover:bg-sky-100 h-8 rounded-lg">
    <FontAwesomeIcon icon={faCreditCard} size="sm" /> Card</button>
    <button className="text-start pl-4  hover:bg-sky-100 h-8 rounded-lg">
    <FontAwesomeIcon icon={faFile} size="sm" /> Report</button>
    <button className="text-start pl-4  hover:bg-sky-100 h-8 rounded-lg">
    <FontAwesomeIcon icon={faBell} size="sm" /> Notifications</button>
    <button className="text-start pl-4  hover:bg-sky-100 h-8 rounded-lg">
    <FontAwesomeIcon icon={faReceipt} size="sm" /> Biling</button>
    <button className="text-start pl-4  hover:bg-sky-100 h-8 rounded-lg">
    <FontAwesomeIcon icon={faFileInvoice} size="sm" /> Invoices</button>
    <button className="text-start pl-4  hover:bg-sky-100 h-8 rounded-lg">
    <FontAwesomeIcon icon={faHeadphones} size="sm" /> Help Center</button>
    <button className="text-start pl-4  hover:bg-sky-100 h-8 rounded-lg">
  <FontAwesomeIcon icon={faGear}/>
   Settings
</button>
    </div>
   </nav>
  </section>
 )
}


