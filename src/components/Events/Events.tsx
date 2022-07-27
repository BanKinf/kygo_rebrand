import { Box, List, ListItem, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import './events.css'

const Events = () => {
    //States
   const [events, setEvents] = React.useState([]);

    //fetch data from API
    useEffect(() => {
         fetch('http://localhost:5000/api/scraper')
            .then(res => res.json())
            .then(data => {
                const events = data.map((event: { month: any; day: any; event: any; location: any; button_text: any; button_href: any; }) => {
                    return {
                        month: event.month,
                        day: event.day,
                        event: event.event,
                        location: event.location,
                        button_text: event.button_text,
                        button_href: event.button_href,
                    }
                })
            setEvents(events)
    })},[])

  return (
    <Box className="events-container">
        
    </Box>
  )
}

export default Events
