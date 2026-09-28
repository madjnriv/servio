import { Controller, useForm } from "react-hook-form";
import { View, Text, ScrollView } from "react-native";
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
import { ImageInput } from "./image-input";

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
      price: "0.0",
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
        price: "0.0",
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
      <ImageInput />
      <View className="mt-5 gap-0.5">
        <Label>
          Name <Text className="text-destructive">*</Text>
        </Label>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Home Cleaning"
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

      <View className="mt-2 gap-0.5">
        <Label>Category</Label>
        <Controller
          control={control}
          name="category"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder=""
              multiline={true}
              numberOfLines={3}
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
      <View className="mt-2 gap-0.5">
        <Label>Excerpt</Label>
        <Controller
          control={control}
          name="excerpt"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="A short description"
              multiline={true}
              numberOfLines={3}
              onChangeText={onChange}
              value={value}
              placeholderTextColor={theme.input}
              className="w-full bg-input/20 border border-border/50"
              returnKeyType="next"
            />
          )}
        />
        {errors.excerpt && (
          <Text className="text-destructive text-sm">
            {errors.excerpt.message}
          </Text>
        )}
      </View>
      <View className="mt-2 gap-0.5">
        <Label>Description</Label>
        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Describe your service in detail"
              multiline={true}
              numberOfLines={3}
              onChangeText={onChange}
              value={value}
              placeholderTextColor={theme.input}
              className="w-full h-24 rounded-lg bg-input/20 border border-border/50"
              returnKeyType="next"
            />
          )}
        />
        {errors.description && (
          <Text className="text-destructive text-sm">
            {errors.description.message}
          </Text>
        )}
      </View>
      <View className="mt-2 gap-2 flex-row items-center justify-between">
        <View className="mt-2 gap-0.5 w-[65%]">
          <Label>Pricing Unit</Label>
          <Controller
            control={control}
            name="pricingUnit"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Describe your service in detail"
                multiline={true}
                numberOfLines={3}
                onChangeText={onChange}
                value={value}
                placeholderTextColor={theme.input}
                className="w-full bg-input/20 border border-border/50"
                returnKeyType="next"
              />
            )}
          />
          {errors.pricingUnit && (
            <Text className="text-destructive text-sm">
              {errors.pricingUnit.message}
            </Text>
          )}
        </View>
        <View className="mt-2 gap-0.5 w-[30%]">
          <Label>Price</Label>
          <Controller
            control={control}
            name="price"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Describe your service in detail"
                keyboardType="numeric"
                onChangeText={onChange}
                value={value}
                placeholderTextColor={theme.input}
                className="w-full bg-input/20 border border-border/50"
                returnKeyType="next"
              />
            )}
          />
          {errors.price && (
            <Text className="text-destructive text-sm">
              {errors.price.message}
            </Text>
          )}
        </View>
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
