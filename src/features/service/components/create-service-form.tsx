import { Controller, useForm } from "react-hook-form";
import { View, Text } from "react-native";
import {
  CreateServiceDto,
  createServiceDtoSchema,
} from "../schemas/create-service.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { servicesService } from "../services/services.service";
import { toast } from "react-native-sonner";
import { Label } from "@/shared/components/label";
import { Input } from "@/shared/components/input";
import { UseThemeColor } from "@/shared/hooks/use-theme-color";
import { Button } from "@/shared/components/button";

export const CreateServiceForm = () => {
  const { theme } = UseThemeColor();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CreateServiceDto>({
    resolver: zodResolver(createServiceDtoSchema),
    defaultValues: {
      name: "",
      category: "",
      description: "",
      excerpt: "",
      price: 0.0,
      pricingUnit: "HOUR",
    },
    mode: "onTouched",
  });

  const onSubmit = async (data: CreateServiceDto) => {
    try {
      console.log("Register form submitted");
      const res = await servicesService.create({
        data,
        providerID: "",
      });
      reset({
        name: "",
        category: "",
        description: "",
        excerpt: "",
        price: 0.0,
        pricingUnit: "HOUR",
      });
    } catch (error) {
      console.log(error);
      const message =
        error instanceof Error ? error.message : "Something went wrong";
      toast.error(message);
    }
  };
  return (
    <View>
      <View className=" gap-0.5">
        <Label>Name</Label>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="John Doe"
              onChangeText={onChange}
              value={value}
              placeholderTextColor={theme.input}
              className="w-full bg-input/20 border border-border/50"
              returnKeyType="next"
              autoCapitalize="words"
              autoComplete="name"
            />
          )}
        />
        {errors.name && (
          <Text className="text-destructive text-sm">
            {errors.name.message}
          </Text>
        )}
      </View>

      <View className=" gap-0.5">
        <Label>Category</Label>
        <Controller
          control={control}
          name="category"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Johndoe@example.com"
              keyboardType="email-address"
              onChangeText={onChange}
              value={value}
              placeholderTextColor={theme.input}
              className="w-full bg-input/20 border border-border/50"
              returnKeyType="next"
            />
          )}
        />
        {errors.category && (
          <Text className="text-destructive text-sm">
            {errors.category.message}
          </Text>
        )}
      </View>

      <Button
        onPress={handleSubmit(onSubmit)}
        className="mt-3 w-full h-12"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Creating Service..." : "Create"}
      </Button>
    </View>
  );
};
