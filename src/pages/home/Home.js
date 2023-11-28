import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Card from '../../components/card/Card';
import { getDashboardList } from '../../api/discover';
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from '../../components/loader/Loader';
import {Toaster,toast} from 'react-hot-toast';


const Home = () => {
    const [dashboardList, setDashboardList] = useState([]);
    const [filterType, setFilterType] = useState("all");
    const [isLoading, setIsLoading] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [message, setMessage] = useState("");

    async function fetchDashboards(filterType){
        setIsLoading(true);
        const list = await getDashboardList(filterType);
        setIsLoading(false);
        setDashboardList(list);
    }

    useEffect(()=>{
        fetchDashboards(filterType);
    },[filterType])

    async function handlesubmit(e){
        e.preventDefault();
        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            contact: contact,
            message: message
        }

        console.log(userData);
        toast.success('Submitted Successfully');
        setFirstName('');
        setLastName('');
        setContact('');
        setEmail('');
        setMessage('');
    }


    return (
        <div className='flex flex-col h-screen w-full'>
            <div className='navbarContainer grow-0 shrink basis-auto'>
                <Navbar currentPage="home" />
            </div>
            {/* <div className='filterContainer px-4 sm:px-8 md:px-20 lg:px-32 md:text-lg flex items-center justify-end py-1'>
                <select id="cars" name="cars" className='h-10 px-2' value={filterType} onChange={(e)=>setFilterType(e.target.value)}>
                    <option value="all">All</option>
                    <option value="tables">Tables</option>
                    <option value="pie">Pie Chats</option>
                    <option value="line">Line Charts</option>
                </select>
            </div>
            <div className='container overflow-y-scroll grow shrink basis-auto mt-1 scrollbar-hide'>
                {isLoading ? <Loader /> :
                <div className='py-1 px-4 sm:px-8 md:px-20 lg:px-32'>
                    {dashboardList.map((dashboard, index)=>{
                        return <Card dashboard={dashboard} key={index} />
                    })}
                </div>}
            </div> */}


<div>
      <section className="text-gray-700 body-font relative">
      <Toaster position='top-center' reverseOrder={false}></Toaster>

        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h1>
          
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form className="flex flex-wrap -m-2" onSubmit={handlesubmit}>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="firstname" className="leading-7 text-sm text-gray-600">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                    value={firstName}
                    onChange={(e)=>setFirstName(e.target.value)}
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="lastname" className="leading-7 text-sm text-gray-600">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={lastName}
                    onChange={(e)=>setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="contact"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Contact no.
                  </label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                    value={contact}
                    onChange={(e)=>setContact(e.target.value)}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message (If any)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <input type='submit' className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" value='Submit' />
                  {/* Submit */}
                {/* </button> */}
              </div>
              
            </form>
          </div>
        </div>
      </section>
    </div>

        </div>
    );
};

export default Home;