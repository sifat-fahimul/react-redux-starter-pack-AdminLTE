import { Accordion, AccordionDetails, AccordionSummary, Box, Collapse, FormControlLabel, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Switch, Typography } from '@mui/material'
import { Mail, Inbox, ExpandMore } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import React, { useState } from 'react';
const navItemGroup = [
    {
        groupName: 'nav header', icon: <Mail />,
        iconColor: 'red',
        subItem: [
            { itemName: 'home', path: '/home', itemIcon: <Inbox /> },
            { itemName: 'about', path: '/about', itemIcon: <Inbox /> },
        ]
    },
    {
        groupName: 'nav header2', icon: <Mail />,
        iconColor: 'green',
        subItem: [
            { itemName: 'home', path: '/home', itemIcon: <Inbox /> },
            { itemName: 'about', path: '/about', itemIcon: <Inbox /> }
        ]
    },
]

const icon = (
    <List sx={{ pl: 1 }}>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
                <ListItemButton>
                    <ListItemIcon sx={{ color: 'white' }}>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItemButton>
            </ListItem>
        ))}
    </List>
);

const SideBar = ({ isOpen }) => {
    const navigate = useNavigate()
    const [checked, setChecked] = useState({ id: 0, check: false });

    const handleChange = (id) => {
        setChecked({ id, check: !checked.check });
    };
    return (
        <>

            {navItemGroup.map((itemGroup, index) => {
                return (
                    <div key={index}>
                        <FormControlLabel sx={{ my: 2 }} onClick={() => handleChange(index)}
                            control={<InboxIcon sx={{ px: 3, ml: 1, color: itemGroup.iconColor }} />}
                            label={itemGroup.groupName}
                        />
                        {checked.id == index && <Collapse in={checked.check}>{itemGroup.subItem.map((item, index) => {
                            return (
                                // <List >
                                <ListItem key={index} sx={{ pl: 1 }} disablePadding>
                                    <ListItemButton onClick={() => navigate(item.path)}>
                                        <ListItemIcon sx={{ color: 'white' }}>
                                            {item.itemIcon}
                                        </ListItemIcon>
                                        <ListItemText primary={item.itemName} />
                                    </ListItemButton>
                                </ListItem>
                                // </List>
                            )
                        })}</Collapse>}

                    </div>
                )
            })}
            {/* <FormControlLabel sx={{ my: 2 }} onClick={() => handleChange(1)}
                control={<InboxIcon sx={{ px: 3, ml: 1 }} />}
                label="Show"
            />
            {checked.id == 1 && <Collapse in={checked.check}>{icon}</Collapse>}

            <FormControlLabel onClick={() => handleChange(2)}
                control={<InboxIcon sx={{ px: 3, ml: 1 }} />}
                label="Show"
            />
            {checked.id == 2 && <Collapse in={checked.check}>{icon}</Collapse>} */}
        </>
    )
}

export default SideBar