import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//comp
import { ChartData } from "../../other/Chart";
//mui
import { Avatar, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Grid from '@mui/material/Grid'; // Grid version 1
import { useParams } from "react-router-dom";

//import translation
import Zoom from '@mui/material/Zoom';

//action
import { getpost } from "../../../redux/action";
import { Spinners } from "../../other/Spinners";

export const OneCoine = () => {
  //order
  const dispatch = useDispatch()


  //params
  const { coin } = useParams();

  //checkTheTr
  const [checked, setChecked] = useState(false);

  //allCoin
  const { list, loading } = useSelector((state) => state.listCoin);

  const [food, setFood] = useState([])

  useEffect(() => {
    if (list.length === 0) {

      dispatch(getpost(1));
    }


    const dataCoin = list.find(item => item.id === coin)
    setFood(dataCoin)
    setChecked(true)

    // dispatch(getOneCoin(list, coin));
  }, [list, coin]);








  return (
    <>


      {/* <h1>{listOne}</h1> */}




      <Container fixed sx={{ backgroundColor: '#fdfdfd', display: "flex", marginTop: '20px', alignItems: 'center' }}>


        {loading ? (
          <Spinners />
        ) : (


          <Box>
            <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>

              <Grid container sx={{ alignItems: 'center' }}>
                <Grid xs={1}>
                  <Avatar alt="Cindy Baker" src={food.image} sx={{ width: 56, height: 56, display: 'flex', alignItems: 'center' }} />
                </Grid>
                <Grid xs={11}>
                  <Typography variant="h3" component="h2">
                    {food.name}
                  </Typography>
                </Grid>
                <Grid xs={12}>
                  <ChartData />
                </Grid>



                <Grid xs={2}>
                  <Typography variant="h4" sx={{ marginTop: '20px' }}>
                    {"$" + food.current_price}
                  </Typography>

                </Grid>

                <Grid xs={2}>
                  <Typography variant="body1" sx={{
                    marginTop: '20px', color:
                      food.price_change_percentage_24h > 0
                        ? "green"
                        : "red",
                  }}>
                    {food.price_change_percentage_24h + '%'}
                  </Typography>

                </Grid>

              </Grid>
            </Zoom>

          </Box>
        )}
      </Container>

    </>
  );
};
