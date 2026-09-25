import { CreateServiceForm } from "@/features/service";
import { Button } from "@/shared/components/button";
import { UseThemeColor } from "@/shared/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Create = () => {
  const { theme } = UseThemeColor();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView className="p-3">
        <Button className="bg-transparent self-start" icon={true}>
          <Ionicons name="chevron-back" color={theme.accent} size={25} />
          <Text className="text-accent text-lg">Back</Text>
        </Button>
        <View className="mt-5">
          <View className="flex-row justify-between">
            <Text className="text-3xl font-semibold w-48 text-foreground">
              Create a{" "}
              <Ionicons
                name="albums-outline"
                size={25}
                color={theme.mutedForeground}
              />{" "}
              New <Text className="text-muted-foreground">Service</Text>
            </Text>

            <View className="relative flex-row gap-1">
              <View className="border border-border bg-muted w-11 h-11 items-center justify-center rounded-xl mt-7">
                <Ionicons
                  size={20}
                  name="briefcase-outline"
                  color={theme.mutedForeground}
                />
              </View>
              <View className="border border-border bg-muted w-11 h-11 items-center justify-center rounded-xl">
                <Ionicons
                  size={20}
                  name="call-outline"
                  color={theme.mutedForeground}
                />
              </View>
              <View className="border border-border bg-muted w-11 h-11 items-center justify-center rounded-xl mt-5">
                <Ionicons
                  size={20}
                  name="calendar"
                  color={theme.mutedForeground}
                />
              </View>
            </View>
          </View>

          <Text className="text-muted-foreground mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </Text>
        </View>

        {/* FORM */}
        <View className="mt-9">
          <CreateServiceForm />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Create;
