import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';

export default makeStyles((theme) => ({
        title: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(theme.palette.common.white, 0.15),
            '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
        },
        searchIcon: {
            gnItems: 'center', justifyContent: 'center',
        },  
        inputRoot: {
            lor: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0), paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, transition: theme.transitions.create('width'), width: '100%', [theme.breakpoints.up('md')]: { width: '20ch' },
        },
        toolbar: {
            display: 'flex', justifyContent: 'space-between',
        },
    }));
