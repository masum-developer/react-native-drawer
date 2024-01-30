import { Stack } from "expo-router";


const RootLayout = () => {
    return (
        <Stack>

            <Stack.Screen name="(tabs)"
             options={{headerShown:false}}
            />

    
            {/* <Stack.Screen 
            name = "index"
            options={{
                headerTitle:"Home Page",
                headerStyle:{
                    backgroundColor:"red"
                }
            }} />
            <Stack.Screen name="users/[id]"
            options={{
                headerTitle:"User Page",
                headerStyle:{
                    backgroundColor:"lightgreen"
                }
            }}
            /> */}
        </Stack>
    );
};

export default RootLayout;