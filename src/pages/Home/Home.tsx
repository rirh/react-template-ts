import React from 'react';
import { Typography } from '@material-ui/core'
import DefaultLayout from 'src/layout/DefaultLayout'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Config from '../../../package.json'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            fontWeight: 'bold'
        },
    }),
);
export const Home: React.FC = () => {
    const classes = useStyles();
    return (
        <DefaultLayout>
            <Typography variant="h3" className={classes.title}>Welcome To React Quick Template</Typography>
            <br/>
            
            {Object.keys(Config.dependencies).map(c => <Typography key={c} variant="body2" className={classes.title}>{
                `${c}:${(Config as any).dependencies[c]}`
            }</Typography>)}

        </DefaultLayout>
    )
};

export const HOME_URL = '/'