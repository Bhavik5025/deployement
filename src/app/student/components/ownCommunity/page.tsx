'use client';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useState,useEffect } from 'react';
import './ownCommunity.css';
import Events from './components/events/page1';
import Posts from './components/posts/page1';
import Requests from './components/requests/page1';
import Students from './components/students/page1';
import Cookies from 'js-cookie';
const inter = Inter({ subsets: ['latin'] });


export default function RootLayout() {
    
//     const communityName =
//     typeof window !== 'undefined' && window.localStorage
//       ? localStorage.getItem('ownCommunity')
//       : null;
//   const [navbar, setNavbar] = useState('requests');

//   const renderComponent = () => {
//     switch (navbar) {
//       case 'events':
//         return <Events />;
//       case 'posts':
//         return <Posts />;
//       case 'requests':
//         return <Requests />;
//       case 'students':
//         return <Students />;
//       default:
//         return null;
//     }
const [navbar, setNavbar] = useState('requests');
const [communityName, setCommunityName] = useState<string | null>(null);

  useEffect(() => {
    // Check if window is defined before accessing localStorage
    // if (typeof window !== 'undefined' && window.localStorage) {
        const storedCommunityName = Cookies.get('ownCommunity');
        setCommunityName(storedCommunityName || null); // Use null if storedCommunityName is null
    //   }
    // Fetch additional data or perform other useEffect logic

    return () => {
      // Cleanup or additional logic if needed
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  const renderComponent = () => {
    switch (navbar) {
      case 'events':
        return <Events />;
      case 'posts':
        return <Posts />;
      case 'requests':
        return <Requests />;
      case 'students':
        return <Students />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8 lg:p-1">
      <nav className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-8 bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-md shadow-md">
        <div className="flex items-center space-x-4">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M10 1a9 9 0 017.993 12.79l5.727 5.727-1.414 1.414-5.727-5.727A9 9 0 1110 1zm0 2a7 7 0 100 14 7 7 0 000-14z" />
          </svg>
          <h1 className="text-2xl font-bold text-white">{communityName}</h1>
        </div>
        <div className="flex space-x-6">
          <Link href="" className={`text-gray-300 ${navbar == 'events' ? 'text-white' : ''} hover:text-white transition duration-300 transform hover:scale-110`} onClick={() => setNavbar('events')}>
            Events
          </Link>
          <Link href="" className={`text-gray-300 ${navbar == 'posts' ? 'text-white' : ''} hover:text-white transition duration-300 transform hover:scale-110`} onClick={() => setNavbar('posts')}>
            Posts
          </Link>
          <Link href="" className={`text-gray-300 ${navbar == 'requests' ? 'text-white' : ''} hover:text-white transition duration-300 transform hover:scale-110`} onClick={() => setNavbar('requests')}>
            Requests
          </Link>
          <Link href="" className={`text-gray-300 ${navbar == 'students' ? 'text-white' : ''} hover:text-white transition duration-300 transform hover:scale-110`} onClick={() => setNavbar('students')}>
            Students
          </Link>
        </div>
      </nav>
      {renderComponent()}
    </div>
  );
}
