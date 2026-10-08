import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "@/shared/components/button";
import { HugeiconsIcon } from "@hugeicons/react-native";
import ArrowLeft02Icon from "@hugeicons/core-free-icons/ArrowLeft02Icon";
import { BalanceCard, WalletCTA } from "@/features/wallet";

const Wallet = () => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentInsetAdjustmentBehavior="never"
      className="flex-1 relative bg-background"
      style={{ paddingBottom: insets.bottom }}
      stickyHeaderIndices={[0]}
    >
      {/* HEADER */}
      <View>
        <View
          style={{ paddingTop: insets.top }}
          className="flex-row justify-between items-center py-3  px-3 bg-background"
        >
          <Button className="bg-transparent border border-border h-11 w-11">
            <HugeiconsIcon
              icon={ArrowLeft02Icon}
              className="text-muted-foreground"
              size={20}
            />
          </Button>

          <Text className="text-lg font-semibold text-muted-foreground">
            Wallet & Transactions
          </Text>
        </View>
      </View>

      {/* CONTENTS */}
      <View className="p-3">
        <View className="gap-3">
          <BalanceCard />
          <WalletCTA />
        </View>
      </View>
    </ScrollView>
  );
};

export default Wallet;
