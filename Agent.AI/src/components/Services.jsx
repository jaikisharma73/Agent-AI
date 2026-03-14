import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'

const Services = () => {
    const servicesData =[
        {
            title:'Security Guard',
            description:'Our professional security team keeps your events safe, organized, and stress-free. From crowd control to VIP protection, we deliver reliable security you can trust.',
            icon:assets.ads_icon
        },
        {
            title:'Event Bouncers',
            description:'We provide strong and professional bouncers to manage entry, control crowds, and maintain order at concerts, parties, weddings, and corporate events.',
            icon:assets.marketing_icon
        },
    ]
  return (
    <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <img src={assets.bgImage2} className='absolute -top-110 -left-70 -z-1 dark:hidden' alt="" />
        <Title title='How can we help ?' desc='Share your event size, location, and security requirements — our team will arrange trusted security personnel to protect and manage your event smoothly.'/> 

        <div className='flex flex-col md:grid grid-cols-2'>
            {servicesData.map((service ,index)=>(
                <ServiceCard key={index} service={service} index={index}/>
            ))}
        </div>

    </div>
  )
}

export default Services