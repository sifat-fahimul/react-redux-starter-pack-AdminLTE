import { Grid } from '@mui/material'
import React from 'react'
import { OverviewTotalCustomers } from '../components/DahsBoard/OverviewTotalCustomers'
import OverviewBudget from '../components/DahsBoard/OverviewBudget'
import { OverviewTasksProgress } from '../components/DahsBoard/OverviewTasksProgress'
import { OverviewTotalProfit } from '../components/DahsBoard/OverviewTotalProfit'
import AppWebsiteVisits from '../components/DahsBoard/AppWebsiteVisits'
import AppConversionRates from '../components/DahsBoard/AppConversionRates'
import { OverviewTraffic } from '../components/DahsBoard/OverviewTraffic'

const Dashboard = () => {
    return (

        <Grid container >
            {/* Contract Starts  */}

            <Grid item xs={12}
                sm={6}
                lg={3} p={1}>

                <OverviewTotalCustomers
                    difference={16}
                    positive={false}
                    value="1.6k"
                />
                {/* <Card
        sx={{
          height: 200,
          boxShadow: "0px 1px 8px 2px rgba(157, 157, 157, 0.25)",
        }}
      >
        <CardHeader title="Total Contracts" align="center"></CardHeader>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">700</Typography>
        </CardContent>
      </Card> */}
            </Grid>
            <Grid item xs={12}
                sm={6}
                lg={3} p={1}>
                {/* <Card
        sx={{
          height: 200,
          boxShadow: "0px 1px 8px 2px rgba(157, 157, 157, 0.25)",
        }}
      >
        <CardHeader title="Contract Value" align="center"></CardHeader>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">$700</Typography>
        </CardContent>
      </Card> */}
                <OverviewBudget
                    difference={12}
                    positive
                    value="$24k"
                />
            </Grid>
            <Grid item xs={12}
                sm={6}
                lg={3} p={1}>
                {/* <Card
        sx={{
          height: 200,
          boxShadow: "0px 1px 8px 2px rgba(157, 157, 157, 0.25)",
        }}
      >
        <CardHeader
          title="Total Payment Recieved"
          align="center"
        ></CardHeader>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">$700</Typography>
        </CardContent>
      </Card> */}
                <OverviewTasksProgress

                    value={75.5}
                />
            </Grid>
            <Grid item xs={12}
                sm={6}
                lg={3} p={1}>
                {/* <Card
        sx={{
          height: 200,
          boxShadow: "0px 1px 8px 2px rgba(157, 157, 157, 0.25)",
        }}
      >
        <CardHeader
          title="PC / STL Loan Adjustment"
          align="center"
        ></CardHeader>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">$700</Typography>
        </CardContent>
      </Card> */}
                <OverviewTotalProfit
                    value="$15k"
                />
            </Grid>
            {/* Contract Ends  */}



            {/* LC Value By Status Start */}
            <Grid item xs={12}
                lg={6} p={1} >
                {/* <Card
        sx={{
          height: 400,
          boxShadow: "0px 1px 8px 2px rgba(157, 157, 157, 0.25)",
        }}
      >
        <CardHeader
          title="Unit-1 (Ashulia)"
          align="center"
          action={
            <>
              <IconButton aria-label="settings" onClick={handleClick}>
                <MoreVertIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                // keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Option 1</MenuItem>
                <MenuItem onClick={handleClose}>Option 2</MenuItem>
                <MenuItem onClick={handleClose}>Option 3</MenuItem>
              </Menu>
            </>
          }
        ></CardHeader>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <VerticalBarChart title="LC Value By Status" showLegend={false} />
        </CardContent>
      </Card> */}
                <AppWebsiteVisits
                    title="Website Visits"
                    subheader="(+43%) than last year"
                    chartLabels={[
                        '01/01/2003',
                        '02/01/2003',
                        '03/01/2003',
                        '04/01/2003',
                        '05/01/2003',
                        '06/01/2003',
                        '07/01/2003',
                        '08/01/2003',
                        '09/01/2003',
                        '10/01/2003',
                        '11/01/2003',
                    ]}
                    chartData={[
                        {
                            name: 'Team A',
                            type: 'column',
                            fill: 'solid',
                            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                        },
                        {
                            name: 'Team B',
                            type: 'area',
                            fill: 'gradient',
                            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                        },
                        {
                            name: 'Team C',
                            type: 'line',
                            fill: 'solid',
                            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                        },
                    ]}
                />
            </Grid>
            {/* LC Value By Status End */}


            <Grid item xs={12}
                sm={6}
                lg={3} p={1} >

                <AppConversionRates
                    title="Conversion Rates"
                    subheader="(+43%) than last year"
                    chartData={[
                        { label: 'Italy', value: 400 },
                        { label: 'Japan', value: 430 },
                        { label: 'China', value: 448 },
                        { label: 'Canada', value: 470 },
                        { label: 'France', value: 540 },
                        { label: 'Germany', value: 580 },
                    ]}
                />
            </Grid>

            <Grid item xs={12}
                sm={6}
                lg={3} p={1}
            >

                <OverviewTraffic
                    chartSeries={[63, 15, 22]}
                    labels={['Desktop', 'Tablet', 'Phone']}

                />
            </Grid>
        </Grid>
    )
}

export default Dashboard

