import type { FC } from 'react'
import { BaseCodeBlock } from '../BaseBlock'

const CODE_CONFIG = {
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

export const Compliance: FC = () => {
	return <BaseCodeBlock {...CODE_CONFIG} />
}
