import { Box, List, ListItem, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react'

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
    <Box>
        <Text>Events</Text>
        <List>
            {events.map((event: { month: any; day: any; event: any; location: any; button_text: any; button_href: any; }) => {
                return (
                    <ListItem key={event.month + event.day}>
                        <br />
                        <h2>{event.month} {event.day}</h2>
                        <p>{event.event}</p>
                        <p>{event.location}</p>
                        <a href={event.button_href}>{event.button_text}</a>
                    </ListItem>
                )})}
        </List>
    </Box>
  )
}

export default Events
