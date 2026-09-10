import { TextInput, TextInputProps } from "react-native";
import React from "react";
import { UseThemeColor } from "../hooks/use-theme-color";

interface InputProps {
  style?: object;
  className?: string;
  placeholder?: TextInputProps["placeholder"];
  placeholderTextColor?: TextInputProps["placeholderTextColor"];
  value?: TextInputProps["value"];
  onChangeText?: TextInputProps["onChangeText"];
  keyboardType?: TextInputProps["keyboardType"];
  autoCapitalize?: TextInputProps["autoCapitalize"];
  autoCorrect?: TextInputProps["autoCorrect"];
  textContentType?: TextInputProps["textContentType"];
  editable?: TextInputProps["editable"];
  maxLength?: TextInputProps["maxLength"];
  autoFocus?: TextInputProps["autoFocus"];
  returnKeyType?: TextInputProps["returnKeyType"];
  onSubmitEditing?: TextInputProps["onSubmitEditing"];
  multiline?: TextInputProps["multiline"];
  numberOfLines?: TextInputProps["numberOfLines"];
  minHeight?: number;
  textAlignVertical?: TextInputProps["textAlignVertical"];
  secureTextEntry?: TextInputProps["secureTextEntry"];
  autoComplete?: TextInputProps["autoComplete"];
}

export const Input = ({
  style,
  className,
  placeholder,
  placeholderTextColor,
  keyboardType,
  value,
  onChangeText,
  textContentType,
  autoCapitalize,
  autoCorrect = false,
  editable = true,
  maxLength,
  autoFocus = false,
  returnKeyType,
  onSubmitEditing,
  multiline = false,
  numberOfLines,
  minHeight,
  textAlignVertical,
  secureTextEntry = false,
  autoComplete,
}: InputProps) => {
  const { theme } = UseThemeColor();
  return (
    <TextInput
      className={` bg-input text-foreground p-3 rounded-full h-12 ${className}`}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor ?? theme.background}
      style={[style, minHeight !== undefined ? { minHeight } : undefined]}
      keyboardType={keyboardType ?? "default"}
      value={value}
      onChangeText={onChangeText}
      textContentType={textContentType ?? "none"}
      autoCapitalize={autoCapitalize ?? "none"}
      autoCorrect={autoCorrect}
      editable={editable}
      maxLength={maxLength}
      autoFocus={autoFocus}
      returnKeyType={returnKeyType ?? "default"}
      onSubmitEditing={onSubmitEditing}
      multiline={multiline}
      numberOfLines={numberOfLines}
      textAlignVertical={textAlignVertical ?? "center"}
      secureTextEntry={secureTextEntry}
      autoComplete={autoComplete ?? "off"}
    />
  );
};
