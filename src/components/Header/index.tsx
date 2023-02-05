import { View } from "react-native"
import { styles } from "./styles"

import Logo from "../Logo"

export const Header = () => {
    return (
        <View style={styles.container}>
            <Logo style={styles.logo} />
        </View>
    )
}