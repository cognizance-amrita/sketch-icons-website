import * as React from "react"
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react"
import { MoonFill , SunFill } from "sketch-icons"

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue("dark", "light")
  const SwitchIcon = useColorModeValue(MoonFill, SunFill)
  const iconColor = useColorModeValue('#2A2238', 'white')
  
  return (
    <IconButton
      size="md"
      fontSize="lg" 
      color="current" 
      onClick={toggleColorMode}
      icon={<SwitchIcon color={iconColor} widht={18} height={18} />}
      aria-label={`Switch to ${text} mode`}
      {...props}
    />
  )
}
