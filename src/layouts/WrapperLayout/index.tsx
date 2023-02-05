import React, { ReactNode } from "react";
import { SafeAreaView, StyleProp, ViewStyle } from "react-native";

type WrapperLayoutProps = {
    children: ReactNode;
    style?: StyleProp<ViewStyle>
}

export const WrapperLayout: React.FC<WrapperLayoutProps> = ({ children, style }) => (
    <SafeAreaView style={style} shouldRasterizeIOS>
        { children }
    </SafeAreaView>
);