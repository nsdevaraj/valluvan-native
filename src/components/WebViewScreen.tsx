import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { WebView } from "@nativescript/core";

export function WebViewScreen() {
    return (
        <webView
            src="https://valluvan.netlify.app/"
            style={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%"
    }
});