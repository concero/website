import type { FC } from 'react'
import { BaseCodeBlock } from '../BaseBlock'
import { useIsMobile } from '@/hooks/useMediaQuery'

const DESKTOP_CONFIG = {
    base: `import {IConceroRouter} from "../interfaces/IConceroRouter.sol";

contract YourContract {
  function yourFunction() external payable {
  
    bytes32 messageId = i_conceroRouter.conceroSend(
      dstChainSelector: 123,
      receiver: "0xMyContract",
      message: "Hello, world!",`,
    verifier: 'safeVerifierA, safeVerifierB',
    relayer: 'anyRelayer',
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
  function yourFunction() 
    external 
    payable 
  {
    bytes32 messageId = 
      i_conceroRouter
        .conceroSend(
      dstChainSelector: 
        123,
      receiver: 
        "0xMyContract",
      message: 
        "Hello, world!",`,
    verifier: 'safeVerifierA, safeVerifierB',
    relayer: 'anyRelayer',
    end: `
    );
  }
}`,
}

export const Security: FC = () => {
    const isMobile = useIsMobile()
    const config = isMobile ? MOBILE_CONFIG : DESKTOP_CONFIG
    
    return <BaseCodeBlock {...config} />
}