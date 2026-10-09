import { View, Text, Image } from "react-native";
import { Card, CardContent, CardHeader } from "@/shared/components/card";
import { SavedPaymentMethod } from "../types/payment-method";
import { CARD_CHIP, PAYMENT_METHOD_IMG } from "@/shared/constants/img-fallback";
import { Button } from "@/shared/components/button";
import { HugeiconsIcon } from "@hugeicons/react-native";
import WalletCardsIcon from "@hugeicons/core-free-icons/WalletCardsIcon";

interface LinkedCardProps {
  card: SavedPaymentMethod;
}
export const LinkedCard = ({ card }: LinkedCardProps) => {
  const cardImg =
    PAYMENT_METHOD_IMG[`${card?.kind === "VISA" ? "VISA" : "PAYPAL"}`];
  return (
    <Card
      className={`w-[20rem] ${card?.isDefault ? "bg-primary border-primary" : "bg-amber-900/90 border-amber-900/90"}`}
    >
      <CardHeader className="flex-row justify-between items-center">
        <View className="flex-row items-center gap-x-3">
          <Image source={cardImg} className="w-10 h-10" />
          {card?.isDefault && (
            <Button className="border border-green-500 px-1">
              <Text className="text-xs text-green-400">DEFAULT</Text>
            </Button>
          )}
        </View>
        <Image source={CARD_CHIP} className="w-8 h-8" />
      </CardHeader>

      <CardContent className="flex-row items-end justify-between">
        <View>
          <Text className="text-xl text-primary-foreground font-semibold">
            {card?.kind === "VISA" ? card.cardholderName : card.accountName}
          </Text>
          <Text className="text-primary-foreground">
            {card?.kind === "VISA"
              ? `**** *** *** ${card.lastFourDigits}`
              : card.accountEmail}
          </Text>
          {card?.kind === "VISA" && (
            <Text className="text-xs text-primary-foreground/80">
              {card.expiryMonth}/{card.expiryYear}
            </Text>
          )}
        </View>
        <Button
          icon
          className="flex-row gap-1 bg-transparent border border-card px-3 py-1"
        >
          <Text className="text-card">Manage</Text>
          <HugeiconsIcon
            icon={WalletCardsIcon}
            className="text-card"
            size={15}
          />
        </Button>
      </CardContent>
    </Card>
  );
};
