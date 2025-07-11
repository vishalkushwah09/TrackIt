import { useState } from "react";
import { Box,IconButton,Typography,useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { sidebarClasses  } from "react-pro-sidebar";
import {  HomeOutlined } from "@mui/icons-material";


const Item = ({title,to,icon,select, setSelect})=>{
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return <>
    <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
    <MenuItem
     active = {select === title} 
     onClick={()=>setSelect(title)} 
     style={{color:colors.grey[100]}} 
     icon={icon} >
      <Typography>{title}</Typography>
      {/* <Link to={to}/> */}
    </MenuItem>
      </Link >
  </>
}


const Sidebarh = ()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed , setCollapsed] = useState(false);
    const [select ,setSelect ] = useState("Dashboard");
    return<>
     
      <Box>
      <Sidebar
        collapsed={isCollapsed}
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: `${colors.primary[400]}`,
             height: "100vh",
          },
        }}
        menuItemStyles={{
          button: ({ active }) => ({
            className: `
              py-[5px] pr-[35px] pl-[20px]
              ${active ? "text-[#6870fa]" : ""}
              hover:text-[#4951bcd]
            `,
          }),
          icon: () => ({
            className: "bg-transparent",
          }),
        }}
      >
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                ml="15px"
              >
                <Typography>Dashboard</Typography>
                <IconButton onClick={() => setCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box
            paddingLeft={isCollapsed ? undefined : "10%"}
          >
            <Item title={"Dashboard"} to= "sg" icon={<HomeOutlined />} select={select} setSelect={setSelect} />
            <Item title={"Batch"} to={"/batch"} icon={<HomeOutlined />} select={select} setSelect={setSelect} />

          </Box>
        </Menu>
      </Sidebar>
    </Box>
    </>
}

export default Sidebarh;

