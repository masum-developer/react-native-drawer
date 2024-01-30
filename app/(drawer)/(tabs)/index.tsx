import { Link, router } from "expo-router";
import { Pressable, Text, View } from "react-native";

const HomePage = () => {
    return (
        <View>
            <Text>Home</Text>
            <Link href="/users/1">Go to user1</Link>
            <Pressable onPress={()=>router.push({
                pathname:"/users/[id]",
                params:{id:2},
            })}><Text>Go to User 2</Text></Pressable>
        </View>
    );
};

export default HomePage;


