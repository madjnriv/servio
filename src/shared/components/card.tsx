import { View, Text, Pressable } from "react-native";
import { Children, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}
interface CardHeaderProps extends CardProps {}
interface CardTitleProps extends CardProps {}
interface CardDescriptionProps extends CardProps {}
interface CardContentProps extends CardProps {}
interface CardFooterProps extends CardProps {}

export const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <Pressable
      {...props}
      className={`${className} bg-card border border-border rounded-2xl`}
    >
      {children}
    </Pressable>
  );
};

export const CardHeader = ({
  children,
  className,
  ...props
}: CardHeaderProps) => {
  return (
    <View {...props} className={`${className} flex-col gap-1 px-3 py-5`}>
      {children}
    </View>
  );
};

export const CardTitle = ({
  children,
  className,
  ...props
}: CardTitleProps) => {
  return (
    <Pressable {...props}>
      <Text className={`text-xl font-medium text-foreground ${className}`}>
        {children}
      </Text>
    </Pressable>
  );
};

export const CardDescription = ({
  children,
  className,
  ...props
}: CardDescriptionProps) => {
  return (
    <Pressable {...props}>
      <Text
        className={`text-base font-normal text-muted-foreground/80  ${className}`}
      >
        {children}
      </Text>
    </Pressable>
  );
};

export const CardContent = ({
  children,
  className,
  ...props
}: CardContentProps) => {
  return (
    <View {...props} className={`p-3 ${className}`}>
      {children}
    </View>
  );
};

export const CardFooter = ({
  children,
  className,
  ...props
}: CardFooterProps) => {
  return (
    <View
      {...props}
      className={`flex-row gap-2 justify-between w-full px-3 py-5 rounded-b-2xl ${className}`}
    >
      {children}
    </View>
  );
};
