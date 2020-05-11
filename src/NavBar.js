import React, {Component} from 'react';
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavBarStyles";
import {ThemeContext} from "./contexts/ThemeContext";
import {withLanguageContext} from "./contexts/LanguageContext";
const content = {
    english: {
        search: "Search",
        flag: "🇺🇸"
    },
    french: {
        search: "Chercher",
        flag: "🇫🇷"
    },
    spanish: {
        search: "Buscar",
        flag: "🇪🇸"
    },
}
class NavBar extends Component {
    static contextType = ThemeContext;
    render(){
        // console.log(this.context);
        const {isDarkMode, toggleTheme} = this.context;
        const {classes} = this.props;
        const {language} = this.props.languageContext;// passed through HOC with
        const {search, flag} = content[language];
        return (
            <div className={classes.root}>
                <AppBar position="static" color={isDarkMode?"default":"primary"}>
                    <ToolBar>
                        <IconButton className={classes.menuButton} color={isDarkMode?"default":"primary"}>
                            <span>{flag}</span>
                        </IconButton>
                        <Typography
                            className={classes.title}
                            variant="h6"
                            color="inherit"
                        >
                            App Title
                        </Typography>
                        <Switch onChange={toggleTheme} />
                        <div className={classes.grow} />
                        <div className={classes.search}>
                            <div className={classes.SearchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase 
                                placeholder={`${search}...`}
                                classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput
                            }} />
                        </div>
                    </ToolBar>
                </AppBar>
            </div>
        )
    }
}

export default withLanguageContext(withStyles(styles)(NavBar));