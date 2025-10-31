import type { FC } from 'react'
import { BaseCodeBlock } from '../BaseBlock'
import { useIsTablet } from '@/hooks/useMediaQuery'
import { useIsMobile } from '@/hooks/useMediaQuery'


const DESKTOP_CONFIG = {
    base: `import {IConceroRouter} from "../interfaces/IConceroRouter.sol";

contract YourContract {
  function yourFunction() external payable {
  
    bytes32 messageId = i_conceroRouter.conceroSend(
      dstChainSelector: 123,
      receiver: "0xMyContract",
      message: "Hello, world!",`,
    verifier: 'compliantVerifier',
    relayer: 'anyRelayer',
    verifierRPC: 'compliantRPC',
    relayerRPC: 'compliantRPC',
    end: `
    );
  }
}`,
}


const TABLET_CONFIG = {
    base: `import {
  IConceroRouter
} from "../interfaces/IConceroRouter.sol";

contract YourContract {
  function yourFunction() external payable {
  
    bytes32 messageId = i_conceroRouter.conceroSend(
      dstChainSelector: 123,
      receiver: "0xMyContract",
      message: "Hello, world!",`,
    verifier: 'compliantVerifier',
    relayer: 'anyRelayer',
    verifierRPC: 'compliantRPC',
    relayerRPC: 'compliantRPC',
    end: `
    );
  }
}`,
}


const MOBILE_CONFIG = {
    base: `import {
  IConceroRouter
} from "../interfaces/IConceroRouter.sol";

contract YourContract {
  function yourFunction() external payable {

    bytes32 messageId = 
      i_conceroRouter.conceroSend(
      dstChainSelector: 123,
      receiver: "0xMyContract",
      message: "Hello, world!",`,
    verifier: 'compliantVerifier',
    relayer: 'anyRelayer',
    verifierRPC: 'compliantRPC',
    relayerRPC: 'compliantRPC',
    end: `
    );
  }
}`,
}


enum DeviceType {
    MOBILE = 'mobile',
    TABLET = 'tablet',
    DESKTOP = 'desktop',
}


export const Compliance: FC = () => {
    const isMobile = useIsMobile()
    const isTablet = useIsTablet()
    
    const getDeviceType = (): DeviceType => {
        if (isMobile) return DeviceType.MOBILE
        if (isTablet) return DeviceType.TABLET
        return DeviceType.DESKTOP
    }
    
    const getConfig = (deviceType: DeviceType) => {
        switch (deviceType) {
            case DeviceType.MOBILE:
                return MOBILE_CONFIG
            case DeviceType.TABLET:
                return TABLET_CONFIG
            case DeviceType.DESKTOP:
                return DESKTOP_CONFIG
            default:
                return DESKTOP_CONFIG
        }
    }
    
    const deviceType = getDeviceType()
    const config = getConfig(deviceType)
    
    return <BaseCodeBlock {...config} />
}
