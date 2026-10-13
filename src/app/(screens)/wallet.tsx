import { FlatList, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "@/shared/components/button";
import { HugeiconsIcon } from "@hugeicons/react-native";
import ArrowLeft02Icon from "@hugeicons/core-free-icons/ArrowLeft02Icon";
import Files01Icon from "@hugeicons/core-free-icons/Files01Icon";
import {
  BalanceCard,
  InviteFriendCard,
  LinkedCard,
  SAVED_PAYMENT_METHODS,
  TRANSACTION_RECORDS,
  TransactionHistoryItem,
  WalletCTA,
} from "@/features/wallet";

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
      <View className="p-3 pb-32">
        <View className="gap-3">
          <BalanceCard />
          <WalletCTA />
        </View>

        {/* LINKED CARDS */}
        <View className="mt-10">
          <Text className="text-lg text-muted-foreground font-semibold">
            Linked Debit cards & Banks
          </Text>
          {SAVED_PAYMENT_METHODS && SAVED_PAYMENT_METHODS.length > 0 ? (
            <FlatList
              horizontal={true}
              data={SAVED_PAYMENT_METHODS}
              renderItem={({ item }) => <LinkedCard card={item} />}
              keyExtractor={(item) => item.methodId}
              contentContainerClassName="gap-x-3 mt-3"
              showsHorizontalScrollIndicator={false}
            />
          ) : (
            <Text>NO CARD LINKED</Text>
          )}
        </View>

        {/* INVITE A FRIEND CARD */}
        <View className="mt-10">
          <InviteFriendCard />
        </View>

        {/* TRANSACTION HISTORY */}
        <View className="mt-10">
          <View className="flex-row items-center justify-between">
            <Text className="text-lg text-muted-foreground font-semibold">
              Transaction History
            </Text>
            <Button
              icon
              className="border-b border-accent rounded-none gap-x-1 pb-0.5"
            >
              <Text className="text-accent">View All</Text>
              <HugeiconsIcon
                icon={Files01Icon}
                size={15}
                className="text-accent"
              />
            </Button>
          </View>
          {TRANSACTION_RECORDS && TRANSACTION_RECORDS.length > 0 ? (
            <FlatList
              data={TRANSACTION_RECORDS.slice(0, 10)}
              renderItem={({ item }) => (
                <TransactionHistoryItem record={item} />
              )}
              keyExtractor={(item) => item.recordId}
              contentContainerClassName="gap-y-5 mt-3"
              showsHorizontalScrollIndicator={false}
            />
          ) : (
            <Text>NO TRANSACTION HISTORY</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default Wallet;
