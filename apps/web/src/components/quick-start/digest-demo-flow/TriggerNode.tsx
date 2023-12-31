import { Handle, Position } from 'react-flow-renderer';

import { Button } from '../../../design-system';
import { BoltOutlinedGradient } from '../../../design-system/icons';
import { useDigestDemoFlowContext } from './DigestDemoFlowProvider';
import { NodeStepWithPopover } from './NodeStepWithPopover';

export function TriggerNode({ data, id }: { data: any; id: string }) {
  const { isReadOnly, runTrigger } = useDigestDemoFlowContext();

  return (
    <NodeStepWithPopover
      data={data}
      id={id}
      Icon={BoltOutlinedGradient}
      ActionItem={
        !isReadOnly && (
          <Button variant="outline" onClick={runTrigger}>
            Run Trigger
          </Button>
        )
      }
      Handlers={() => {
        return (
          <>
            <Handle type="source" id="a" position={Position.Bottom} />
          </>
        );
      }}
    />
  );
}
