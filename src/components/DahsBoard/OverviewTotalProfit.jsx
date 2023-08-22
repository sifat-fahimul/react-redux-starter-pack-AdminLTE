import PropTypes from 'prop-types';
import CurrencyDollarIcon from '@heroicons/react/24/solid/CurrencyDollarIcon';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';
import React from 'react';

export const OverviewTotalProfit = (props) => {
    const { value } = props;

    return (
        <Card elevation={0}
            sx={{
                border: '1px solid rgba(25, 118, 210,.2)',
                height: '100%',
                // boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                "&:hover": {
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    border: '1px solid rgba(25, 118, 210,.5)',

                }

            }}>
            <CardContent>
                <Stack
                    alignItems="flex-start"
                    direction="row"
                    justifyContent="space-between"
                    spacing={3}
                >
                    <Stack spacing={0}>
                        <Typography
                            color="text.secondary"
                            variant="overline"
                        >
                            Total Profit
                        </Typography>
                        <Typography variant="h6">
                            {value}
                        </Typography>
                    </Stack>
                    <Avatar
                        sx={{
                            backgroundColor: 'primary.main',
                            height: 40,
                            width: 40
                        }}
                    >
                        <SvgIcon>
                            <CurrencyDollarIcon />
                        </SvgIcon>
                    </Avatar>
                </Stack>
            </CardContent>
        </Card>
    );
};

OverviewTotalProfit.propTypes = {
    value: PropTypes.string,
    sx: PropTypes.object
};
