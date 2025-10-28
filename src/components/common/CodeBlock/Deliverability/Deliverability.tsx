import type { FC } from 'react'
import { BaseCodeBlock } from '../BaseBlock'

const CONFIG = {
	base: `import {IConceroRouter} from "../interfaces/IConceroRouter.sol";

contract YourContract {
    function yourFunction() external payable {

        bytes32 messageId = i_conceroRouter.conceroSend(
            dstChainSelector: 123,
            receiver: "0xMyContract",
            message: "Hello, world!",`,
	verifier: 'compliantVerifier',
	relayer: 'relayerA, relayerB, relayerC',
	verifierRPC: 'reliableRPC',
	relayerRPC: 'reliableRPC',
	end: `
        );
    }
}`,
}

export const Deliverability: FC = () => <BaseCodeBlock {...CONFIG} />
