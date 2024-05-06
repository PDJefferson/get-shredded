import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function index() {
  const router = useRouter();
  return (
    <View className="flex-1 flex justify-end">
      <StatusBar style="light" />
      <Image
        className="h-full w-full absolute top-0 left-0"
        source={require("../assets/images/welcome.png")}
      />
      <LinearGradient
        colors={["transparent", "#18181b"]}
        style={{ width: wp(100), height: hp(70) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        className="flex justify-end pb-12 space-y-8"
      >
        <Animated.View
          entering={FadeIn.delay(100).springify()}
          className="flex items-center"
        >
          <Text
            style={{ fontSize: hp(5) }}
            className="text-bold tracking-wide text-white"
          >
            Best <Text className="text-rose-500">Workouts</Text>
          </Text>
          <Text
            style={{ fontSize: hp(5) }}
            className="text-bold tracking-wide text-white"
          >
            For you!
          </Text>
        </Animated.View>
        <Animated.View
          entering={FadeInDown.delay(200).springify()}
          className="flex items-center"
        >
          <TouchableOpacity
            onPress={() => router.push("home")}
            className="bg-rose-500 justify-center items-center mx-auto rounded-full border-[2px] border-neutral-50"
            style={{
              width: wp(80),
              height: hp(7),
            }}
          >
            <Text
              style={{ fontSize: hp(3) }}
              className=" text-white font-bold tracking-widest"
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
      <Text>Check this out</Text>
    </View>
  );
}
