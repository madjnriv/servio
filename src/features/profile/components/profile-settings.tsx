import { Card, CardContent } from "@/shared/components/card";
import {
  accountSettings,
  generalSettings,
  preferencesSettings,
} from "../constants/profile-settings";
import { Text, View } from "react-native";
import { HugeiconsIcon } from "@hugeicons/react-native";
import ChevronRight from "@hugeicons/core-free-icons/ArrowRight01Icon";
import ToggleLeftIcon from "@hugeicons/core-free-icons/ToggleLeftIcon";
import { Separator } from "@/shared/components/separator";

export const ProfileSettings = () => {
  return (
    <View className="gap-y-3">
      {/* accountSettings */}
      <Card className="border-0 rounded-3xl px-3">
        {accountSettings.map((item) => (
          <>
            <CardContent
              key={item.id}
              className="flex-row items-center justify-between"
            >
              <View className="flex-row items-center gap-x-3">
                <HugeiconsIcon
                  icon={item.icon}
                  size={20}
                  className="text-muted-foreground"
                />
                <Text className="text-muted-foreground">{item.name}</Text>
              </View>
              <View>
                {item.cta && item.cta.type === "TOGGLE" ? (
                  <HugeiconsIcon icon={ToggleLeftIcon} size={20} />
                ) : (
                  <HugeiconsIcon
                    icon={ChevronRight}
                    size={20}
                    className="text-muted-foreground"
                  />
                )}
              </View>
            </CardContent>
            {item.id !== accountSettings[accountSettings.length - 1].id && (
              <Separator className="w-[90%] mx-auto" />
            )}
          </>
        ))}
      </Card>

      {/* preferencesSettings */}
      <Card className="border-0 rounded-3xl px-3">
        {preferencesSettings.map((item) => (
          <>
            <CardContent
              key={item.id}
              className="flex-row items-center justify-between"
            >
              <View className="flex-row items-center gap-x-3">
                <HugeiconsIcon
                  icon={item.icon}
                  size={20}
                  className="text-muted-foreground"
                />
                <Text className="text-muted-foreground">{item.name}</Text>
              </View>
              <View>
                {item.cta && item.cta.type === "TOGGLE" ? (
                  <HugeiconsIcon icon={ToggleLeftIcon} size={20} />
                ) : (
                  <HugeiconsIcon
                    icon={ChevronRight}
                    size={20}
                    className="text-muted-foreground"
                  />
                )}
              </View>
            </CardContent>
            {item.id !==
              preferencesSettings[preferencesSettings.length - 1].id && (
              <Separator className="w-[90%] mx-auto" />
            )}
          </>
        ))}
      </Card>

      {/* generalSettings */}
      <Card className="border-0 rounded-3xl px-3">
        {generalSettings.map((item) => (
          <>
            <CardContent
              key={item.id}
              className="flex-row items-center justify-between"
            >
              <View className="flex-row items-center gap-x-3">
                <HugeiconsIcon
                  icon={item.icon}
                  size={20}
                  className="text-muted-foreground"
                />
                <Text className="text-muted-foreground">{item.name}</Text>
              </View>
              <View>
                {item.cta && item.cta.type === "TOGGLE" ? (
                  <HugeiconsIcon
                    icon={ToggleLeftIcon}
                    size={20}
                    className="text-muted-foreground"
                  />
                ) : (
                  <HugeiconsIcon
                    icon={ChevronRight}
                    size={20}
                    className="text-muted-foreground"
                  />
                )}
              </View>
            </CardContent>
            {item.id !== generalSettings[generalSettings.length - 1].id && (
              <Separator className="w-[90%] mx-auto" />
            )}
          </>
        ))}
      </Card>
    </View>
  );
};
