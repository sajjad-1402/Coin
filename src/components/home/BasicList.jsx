import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//import MUI
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { ListSubheader, Typography } from "@mui/material";

//import translation
import Zoom from '@mui/material/Zoom';


// import action
import { getPageNamber, getpost } from "../../redux/action";
//reactDome
import { Link } from "react-router-dom";

//components
import { PaginationControlled } from "./PaginationControlled";
import { Spinners } from "../other/Spinners";

export const BasicList = ({ text }) => {
  //page number
  const [page, setpage] = useState(1);

  //checkTheTr
  const [checked, setChecked] = useState(false);




  //list Coin Data
  const dispatch = useDispatch();

  useEffect(() => {


  dispatch(getpost(page));



  setChecked(true)

}, [dispatch, page]);

const { list, loading } = useSelector((state) => state.listCoin);

useEffect(() => {
  dispatch(getPageNamber(page))
}, [page,dispatch])


//oneCoin

// const [updata, setUpdata] = useState([]);




//search box
const [searchText, setSearchText] = useState([]);
useEffect(() => {
  setSearchText(
    list.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    )
  );
}, [list, text]);





return (
  <>
    {loading ? (
      <Spinners />
    ) : (
      <>
        <Box
          sx={{
            width: "100%",
            maxWidth: 900,
            bgcolor: "background.paper",
            m: "auto",
          }}
        >
          <nav aria-label="main mailbox folders">
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{ display: "flex", gap: "25%", flexDirection: "row" }}
            >
              <span> Coin</span>
              <span style={{ marginLeft: "40px" }}>Price</span>
              <span style={{ marginRight: "-52px", marginLeft: "-77px" }}>
                24h
              </span>
              <span>Mkt Cap</span>
            </ListSubheader>

            {searchText &&
              searchText.map((item, index) => (

                <Link to={item.id} className="filldown section">
                  <List
                    key={index}
                  // onMouseOver={() => { setUpdata(item.id); }}
                  // onClick={() => {
                  //   navigate(item.id.toString());
                  // }}
                  // to={item.id.toString()}
                  >
                    <ListItem disablePadding>
                      <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
                        <ListItemButton>
                          <ListItemIcon>
                            <img
                              src={item.image}
                              alt={item.name}
                              title={item.symbol}
                              width={"40px"}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={item.name}
                            secondary={item.symbol.toUpperCase()}
                            sx={{ width: "110px" }}
                          />

                          <ListItemText
                            primary={"$" + item.current_price.toLocaleString()}
                            sx={{ width: "20px" }}
                          />
                          <ListItemText
                            primary={item.price_change_percentage_24h}
                            sx={{
                              color:
                                item.price_change_percentage_24h > 0
                                  ? "green"
                                  : "red",
                            }}
                          />
                          <ListItemText
                            primary={"$" + item.market_cap.toLocaleString()}
                          />
                        </ListItemButton>
                      </Zoom>
                    </ListItem>
                    <Divider />
                  </List>
                </Link>
              ))}
          </nav>
        </Box>
      </>
    )}
    {/* search Ondifan */}
    {searchText.length === 0 && !loading && (
      <Typography sx={{ display: "flex", justifyContent: "center" }} p={29}>
        Saerch is Ondifan
      </Typography>
    )}
    {/* page Number */}

    <PaginationControlled pageNumber={setpage} />

  </>
);
};
