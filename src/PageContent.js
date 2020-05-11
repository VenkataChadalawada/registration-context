import React, {Component} from 'react';
import { ThemeContext } from './contexts/ThemeContext';
export default class pageContent extends Component {
    static contextType = ThemeContext;
    render() {
        const { isDarkMode } = this.context;
        console.log("===oooooo===", isDarkMode);
        const styles = {
            backgroundColor: isDarkMode ? "black" : "white",
            height: "100vh",
            width: "100vw"
        };
        return <div style={styles}>{this.props.children}</div>
    }
}

// isDarkTheme
