import { Box, List, ListItem, Table, TableContainer, Tbody, Text, Th, Thead, Tr, Image } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import './events.css'

const Events = () => {
    //States
   const [events, setEvents] = React.useState([]);

    //fetch data from API
    useEffect(() => {
         fetch('https://apikygo.up.railway.app/api/scraper')
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
    <Box className="container">
        <TableContainer className='table__container' maxWidth="85%" marginY="0" marginX="auto">
            <Table variant="unstyled">
                    <Thead>
                        <Tr>
                            <Th>
                                <Text className='Theader__element'>Date</Text>
                            </Th>
                            <Th>
                                <Text className='Theader__element'>Event</Text>
                            </Th>
                            <Th>
                                <Text className='Theader__element'>Location</Text>
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody className='table__body'>
                        {events.map((
                        event: { 
                            month:       any; 
                            day:         any; 
                            event:       any; 
                            location:    any; 
                            button_text: any; 
                            button_href: any; 
                        }) => {

                            const Button = () => {
                                if (event.button_href === undefined) {
                                    return <Image 
                                        src="src/assets/svg/notButton.svg"
                                        alt="NotButton"
                                    />
                                } else {
                                    if (event.button_text === "Tickets") {
                                        return <Image 
                                            src="src/assets/svg/ticketButton.svg" 
                                            alt="TicketButton"
                                            onClick={() => {
                                                window.open(event.button_href, '_blank')
                                            }}
                                            _hover={
                                                { cursor: 'pointer' }
                                            }
                                        />
                                    } else {
                                        return <Image 
                                            src="src/assets/svg/preSaleButton.svg"
                                            alt="PreSaleButton"
                                            onClick={() => {
                                                window.open(event.button_href, '_blank')
                                            }}
                                            _hover={
                                                { cursor: 'pointer' }
                                            }
                                        />
                                    }
                                }
                            }

                            return (
                                <Tr className='separation__Line'>
                                    <Th>
                                        <Box className='eventDayMonthcontainer'>
                                            <Box>
                                                <Text className='eventDayMonth'>{event.month}</Text>
                                                <Text className='eventDayMonth eventDay'>{event.day}</Text>
                                            </Box>
                                            <Box className='eventDayMonthSvgContainer'>
                                                <Image src="src/assets/svg/lineoblicua.svg" className='eventDayMonthSvg'/>
                                            </Box>
                                        </Box>
                                    </Th>
                                    <Th>
                                        <Text className='eventEvent'>{event.event}</Text>
                                    </Th>
                                    <Th>
                                        <Text className='eventLocation'>{event.location}</Text>
                                    </Th>
                                    <Th>
                                        <Box className='eventButton'>
                                            <Button />
                                        </Box>
                                    </Th>
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
        </TableContainer>
    </Box> 
  )
}

export default Events