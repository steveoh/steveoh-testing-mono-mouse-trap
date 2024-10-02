import * as RadixPopover from '@radix-ui/react-popover';
import PropTypes from 'prop-types';
import { isValidElement } from 'react';

export default function Popover({
  trigger,
  children,
  open = false,
  isModal = false,
}) {
  return (
    <RadixPopover.Root defaultOpen={open} model={isModal} asChild>
      {/*
          Mark asChild true if the trigger is a component as opposed to a string.
          This prevents the console error about rendering a button within a button if the component
          contains a button.
        */}
      <RadixPopover.Trigger asChild={isValidElement(trigger)}>
        {trigger}
      </RadixPopover.Trigger>
      <RadixPopover.Portal>
        <RadixPopover.Content
          side="bottom"
          className="z-10 mr-2 rounded-md bg-white p-4 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:bg-slate-900"
          sideOffset={4}
        >
          {children}
          <RadixPopover.Arrow className="fill-white dark:fill-slate-900" />
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
}

Popover.propTypes = {
  trigger: PropTypes.node.isRequired,
  /**
   * The content of the popover
   */
  children: PropTypes.node.isRequired,
  open: PropTypes.bool,
  isModal: PropTypes.bool,
};
