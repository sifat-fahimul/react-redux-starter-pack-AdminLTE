import PropTypes from 'prop-types';
import ComputerDesktopIcon from '@heroicons/react/24/solid/ComputerDesktopIcon';
import DeviceTabletIcon from '@heroicons/react/24/solid/DeviceTabletIcon';
import PhoneIcon from '@heroicons/react/24/solid/PhoneIcon';
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Stack,
    SvgIcon,
    Typography,
    useTheme
} from '@mui/material';

import Chart from "react-apexcharts";
import React from 'react';

const useChartOptions = (labels) => {
    const theme = useTheme();

    return {
        chart: {
            background: 'transparent'
        },
        colors: [
            theme.palette.primary.main,
            theme.palette.success.main,
            theme.palette.warning.main
        ],
        dataLabels: {
            enabled: false
        },
        labels,
        legend: {
            show: false
        },
        plotOptions: {
            pie: {
                expandOnClick: false
            }
        },
        states: {
            active: {
                filter: {
                    type: 'none'
                }
            },
            hover: {
                filter: {
                    type: 'none'
                }
            }
        },
        stroke: {
            width: 0
        },
        theme: {
            mode: theme.palette.mode
        },
        tooltip: {
            fillSeriesColor: false
        }
    };
};

const iconMap = {
    Desktop: (
        <SvgIcon>
            <ComputerDesktopIcon />
        </SvgIcon>
    ),
    Tablet: (
        <SvgIcon>
            <DeviceTabletIcon />
        </SvgIcon>
    ),
    Phone: (
        <SvgIcon>
            <PhoneIcon />
        </SvgIcon>
    )
};

export const OverviewTraffic = (props) => {
    const { chartSeries, labels } = props;
    const chartOptions = useChartOptions(labels);

    return (
        <Card elevation={0} sx={{
            border: '1px solid',
            borderImageSlice: 1,
            borderImage: `linear-gradient(to right, rgba(20, 125, 226,.2), rgba(237, 108, 2,.2), rgba(46, 125, 50,.2) ) 1`,
            "&:hover": {
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                borderImage: `linear-gradient(to right, rgba(20, 125, 226,.5), rgba(237, 108, 2,.5), rgba(46, 125, 50,.5) ) 1`,


            }

        }}>
            <CardHeader title="Traffic Source" />
            <CardContent>
                <Chart
                    height={200}
                    options={chartOptions}
                    series={chartSeries}
                    type="donut"
                    width="100%"
                />
                <Stack
                    alignItems="center"
                    direction="row"
                    justifyContent="center"
                    spacing={2}
                    sx={{ mt: 2 }}
                >
                    {chartSeries.map((item, index) => {
                        const label = labels[index];

                        return (
                            <Box
                                key={label}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',


                                }}

                            >
                                {iconMap[label]}
                                <Typography
                                    sx={{ my: 1 }}
                                >
                                    {label}
                                </Typography>
                                <Typography
                                    color="text.secondary"
                                    variant="subtitle2"
                                >
                                    {item}%
                                </Typography>
                            </Box>
                        );
                    })}
                </Stack>
            </CardContent>
        </Card>
    );
};

OverviewTraffic.propTypes = {
    chartSeries: PropTypes.array.isRequired,
    labels: PropTypes.array.isRequired,
    sx: PropTypes.object
};
